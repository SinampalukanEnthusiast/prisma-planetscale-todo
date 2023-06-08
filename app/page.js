import InputBox from "@/components/InputBox";
import Image from "next/image";
// import { PrismaClient } from "@prisma/client";

async function getTasks() {
  const res = await fetch("http://localhost:3000/api/getTasks");
  // console.log("res ", await res.json());

  const data = res.json();
  return data;
}

export default async function Home({ result }) {
  const data = await getTasks();
  console.log("data ", data);
  return (
    <main className="w-screen h-screen ">
      <div className="h-screen flex flex-col items-center ">
        <span className="text-5xl font-bold p-4 border-b-2 w-1/2 text-center m-4">
          Tasks
        </span>
        <InputBox />
      </div>
    </main>
  );
}
// export async function getServerSideProps() {
//   const prisma = new PrismaClient();
//   const result = await prisma.tasks.findMany();

//   console.log("reuslt from prisma: ", result);

//   return {
//     props: {
//       result,
//     },
//   };
// }
