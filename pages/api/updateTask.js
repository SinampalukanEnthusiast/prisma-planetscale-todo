import { prisma } from "@/lib/db";

export default async function handler(req, res) {
  const { currentTask, editedTask } = req.body;
  // console.log("S: Update task received", currentTask, editedTask);
  const result = await prisma.tasks.updateMany({
    data: { task: editedTask },
    where: {
      task: currentTask,
    },
  });

  // console.log("S: Update task result", result);
  res.json(result);
}
