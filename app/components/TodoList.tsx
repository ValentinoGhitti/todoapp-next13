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
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskComponent key={task.id} task={task} />
          ))}

        </tbody>
      </table>
    </div>
  );
}

