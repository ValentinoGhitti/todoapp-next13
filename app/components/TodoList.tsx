import { Task } from "@/types/tasks";
import React from "react";
import  TaskComponent  from "./TaskComponent";


interface TodoListProps {
  tasks: Task[]
}

export const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  console.log(tasks)
  return (
    <div className="overflow-x-auto">
      <div>
        <ul className="block w-full pt-6">
          <div>
            <li  className="w-full border-1 rounded-xl mt-2">
              <label  className="block w-full p-3 text-base-300">
                {tasks.map((task) => (
                  <TaskComponent key={task.id} task={task} />
                ))}
              </label>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

