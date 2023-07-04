import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { task, taskStatus } = req.body;
  // console.log("task, userEmail ", task, userEmail);

  const { method } = req;

  if (method === "GET") {
    const user = await prisma.user.findUnique({
      where: { email: "admin@email.com" },
    });
    let result = await prisma.tasks.findMany({
      where: { authorId: user.id, taskStatus: true },
      // select: { taskStatus },
    });
    result = result.map((item) => item.task);
    console.log("S: GET tasks done", result);
    res.json(result);
  }
  if (method === "PATCH") {
    const user = await prisma.user.findUnique({
      where: { email: "admin@email.com" },
    });
    let result = await prisma.tasks.updateMany({
      where: { task },
      data: { taskStatus },
      // select: { taskStatus },
    });
    // result = result.map((item) => item.task);
    console.log("S: PATCH tasks done", result);
    res.json(result);
  }
}
