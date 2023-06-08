import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const result = await prisma.tasks.findMany();
  console.log("reuslt ", result);
  return res.json(result);
}
