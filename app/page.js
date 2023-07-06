import InputBox from "@/components/InputBox";
import Image from "next/image";
// import { PrismaClient } from "@prisma/client";

export default async function Home() {
  return (
    <main className="w-screen h-screen ">
      <div className="h-screen flex flex-col items-center">
        <span className="text-5xl font-bold p-4 border-b-2 w-full md:w-2/3 lg:w-1/2 text-center m-4 bg-b">
          Tasks
        </span>
        <InputBox />
      </div>
    </main>
  );
}
