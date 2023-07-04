import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { task } = req.query;
  // console.log("task, userEmail ", task, userEmail);

  const result = await prisma.tasks.deleteMany({ where: { task } });

  console.log("Deleted ", result);
  res.status(200).json(result);
}
