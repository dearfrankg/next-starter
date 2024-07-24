export interface TestRecord {
  id: string;
  name: string;
}

export interface TestId {
  selectedTestId?: string;
  selectedTestMode?: string;
}

export interface Test {
  name?: string;
  questions: TestQuestion[];
}

export interface Choice {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface TestQuestion {
  question: string;
  subTopic: string;
  choices: Choice;
  answer: string[];
  explanation: string;
  example?: string;
}
