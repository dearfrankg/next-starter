import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let count = 1; count < 30; count++) {
    const user = {
      name: `John Doe-${count}`,
      email: `jd${count}@apple.com`,
      role: Math.random() < 0.5 ? "" : "admin",
    };
    await prisma.user.create({ data: user });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
