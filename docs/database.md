# DATABASE

## Using a JSON approach for storing answers

The JSON approach offers a good balance between database efficiency and data flexibility. It's particularly well-suited for scenarios where you typically work with all answers for a test attempt together, and where the number of answers per attempt is manageable (typically up to a few hundred).

The JSON approach for storing test answers involves using a JSON column in your database to store all answers for a single test attempt. This can be particularly effective with databases like PostgreSQL that have robust JSON support.

### 1. Schema Change

Your Prisma schema would look like this:

```prisma
model TestAttempt {
    id        String   @id @default(cuid())
    userId    String
    user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
    testId    String
    test      Test     @relation(fields: [testId], references: [id], onDelete: Cascade)
    startedAt DateTime @default(now())
    finishedAt DateTime?
    score     Float?
    answers   Json     // This is the new JSON field

    @@map("test_attempts")
}
```

### 2. Data Structure

The `answers` field could store data in a format like this:

```json
{
  "answers": [
    { "questionId": "q1", "choiceId": "c1" },
    { "questionId": "q2", "choiceId": "c3" },
    { "questionId": "q3", "choiceId": "c2" }
  ]
}
```

### 3. Advantages

- Reduced number of database records
- Efficient retrieval of all answers for a test attempt
- Flexibility in answer structure (easy to add metadata if needed)
- Good performance for inserting and retrieving full sets of answers

### 4. Querying

With PostgreSQL, you can query JSON data efficiently. For example:

- To find all attempts where a specific question was answered:

```sql
SELECT * FROM "TestAttempt"
WHERE answers::jsonb @> '[{"questionId": "q1"}]';
```

- To extract a specific answer:

```sql
SELECT answers->0 FROM "TestAttempt"
WHERE id = 'some_id';
```

### 5. Prisma Usage

With Prisma, you'd work with the JSON data like this:

```typescript
// Creating a test attempt with answers
const testAttempt = await prisma.testAttempt.create({
  data: {
    userId: "user1",
    testId: "test1",
    answers: {
      answers: [
        { questionId: "q1", choiceId: "c1" },
        { questionId: "q2", choiceId: "c3" },
      ],
    },
  },
});

// Querying test attempts
const attempts = await prisma.testAttempt.findMany({
  where: {
    answers: {
      path: ["answers"],
      array_contains: [{ questionId: "q1" }],
    },
  },
});
```

### 6. Considerations

- Indexing: You can create indices on JSON fields in PostgreSQL for better query performance.
- Validation: You'll need to handle data validation in your application code.
- Updates: Updating individual answers might be less efficient than with separate records.

### 7. Scalability

This approach scales well for most use cases. However, if you have extremely large tests (thousands of questions), you might need to consider chunking the JSON or using a different approach.

### 8. Migration

If you're switching from individual records, you'll need to migrate your existing data. This could involve a script that groups TestAnswer records by TestAttempt and converts them to JSON.

## Storing Incorrect Answers

This approach provides a good balance between query performance and data management complexity. It's particularly beneficial if you frequently need to access information about incorrect answers, such as for displaying results to users, generating reports, or performing analytics on test performance.

Storing information about incorrect answers in a separate field is an excellent idea, especially if you frequently need to access this information. This approach can significantly improve query performance and simplify your data retrieval process.

### 1. Modified Schema

```prisma
model TestAttempt {
  id                String   @id @default(cuid())
  userId            String
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  testId            String
  test              Test     @relation(fields: [testId], references: [id], onDelete: Cascade)
  startedAt         DateTime @default(now())
  finishedAt        DateTime?
  score             Float?
  answers           Json     // All answers
  incorrectAnswers  Json     // Only incorrect answers
  incorrectCount    Int      // Count of incorrect answers

  @@map("test_attempts")
}
```

### 2. Data Structure for Incorrect Answers

The `incorrectAnswers` field could store data like this:

```json
{
  "incorrectAnswers": [
    { "questionId": "q1", "userChoiceId": "c1", "correctChoiceId": "c2" },
    { "questionId": "q3", "userChoiceId": "c1", "correctChoiceId": "c3" }
  ]
}
```

### 3. Updating the Test Attempt

When a user completes a test, you'd calculate the incorrect answers and store them:

```typescript
const testAttempt = await prisma.testAttempt.create({
  data: {
    userId: 'user1',
    testId: 'test1',
    answers: { answers: [...] },
    incorrectAnswers: { incorrectAnswers: [...] },
    incorrectCount: incorrectAnswersCount,
    score: calculatedScore
  }
});
```

### 4. Querying Incorrect Answers

Now, querying for incorrect answers becomes much simpler and more efficient:

```typescript
const testAttempt = await prisma.testAttempt.findUnique({
  where: { id: "testAttemptId" },
  select: { incorrectAnswers: true, incorrectCount: true },
});

console.log(
  "Incorrect answers:",
  testAttempt.incorrectAnswers.incorrectAnswers,
);
console.log("Number of incorrect answers:", testAttempt.incorrectCount);
```

### 5. Advantages of This Approach

- Faster Queries: Retrieving incorrect answers is now a simple field selection, not a complex comparison operation.
- Reduced Computation: You calculate incorrect answers once, at test completion, rather than every time you need this information.
- Flexibility: You can easily include additional information about each incorrect answer (e.g., the correct choice) without complicating your queries.
- Efficient Filtering: You can easily filter test attempts based on the number of incorrect answers.

### 6. Considerations for Storing Incorrect Answers

- Data Redundancy: You're storing some information twice (in both `answers` and `incorrectAnswers`), which increases storage requirements slightly.
- Data Integrity: Ensure that your application logic keeps `answers`, `incorrectAnswers`, `incorrectCount`, and `score` consistent.

### 7. Example Query for Analytics

With this structure, you can easily perform analytics, like finding tests with the most incorrect answers:

```typescript
const testsWithMostIncorrect = await prisma.testAttempt.findMany({
  orderBy: { incorrectCount: "desc" },
  take: 10,
  select: {
    id: true,
    testId: true,
    incorrectCount: true,
    score: true,
  },
});
```

### 8. Indexing

Consider adding an index on `incorrectCount` if you frequently query or sort based on this field:

```sql
CREATE INDEX idx_test_attempt_incorrect_count ON "TestAttempt" ("incorrectCount");
```
