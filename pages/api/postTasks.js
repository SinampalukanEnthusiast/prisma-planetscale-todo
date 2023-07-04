import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { task, userEmail } = req.body;
  console.log("task, userEmail ", task, userEmail);

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  });
  console.log("user ", user);
  const result = await prisma.tasks.create({
    data: { task, authorId: user.id },
  });
  console.log("Posted ", result);
  res.status(200).json(result);
}
