import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // const { task, userEmail } = req.body;
  // console.log("task, userEmail ", task, userEmail);

  const user = await prisma.user.findUnique({
    where: { email: "admin@email.com" },
  });
  let result = await prisma.tasks.findMany({
    where: { authorId: user.id },
    select: { task: true },
  });
  result = result.map((item) => item.task);
  console.log("S: GET tasks ", result);
  res.json(result);
}
