import { getAllTodos } from "@/api";
import { TodoList } from "./components/TodoList";
import { format } from 'date-fns'
import { es } from 'date-fns/locale';
import Image from "next/image";
import AddTask from "./components/AddTask";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks)
  return (
    <main className="max-w-4xl mx-auto">

      <div className="flex justify-center pt-40">
        <div className="max-w-sm w-full shadow-lg bg-info-content p-8 rounded-xl opacity-70">
          
          <div className="flex justify-center bg-base-100 rounded-3xl px-4 py-1 color-gray hover:scale-110 transition-all">
            <Image
              className="object-cover rounded-full w-16 h-16 m-2"
              src="/profile-img.jpeg"
              alt="img-vachu"
              width={64}
              height={64}
            />
            <div className="w-full p-3">
              <p className="text-3xl text-primary-content">Todo List</p>
              <p className="text-sm text-gray">{format(new Date(), 'MMMM d, yyyy', { locale: es })}</p>
            </div>
          </div>

          <div className="relative mt-10">
            <AddTask />
          </div>

          <TodoList tasks={tasks} />
        </div>
      </div>
    </main>
  );
}
