'use client';

import { Task } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: Task
}

const TaskComponent: React.FC<TaskProps> = ({task}) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit
    })
    setOpenModalEdit(false);
    router.refresh();
  }

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  }

  return (
    <div key={task.id} className="flex items-center">
      <div className="w-full text-secondary-content">{task.text}</div>
      <div className="flex gap-2">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor={'pointer'} 
          className="text-blue-500" 
          size={25} 
        />

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg text-primary-content'>Edita la tarea actual</h3>
            <div className='modal-action'>
              <input 
                type="text"
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                placeholder="Escribí acá" 
                className="input input-bordered w-full text-primary-content" 
              />
              <button type='submit' className='btn btn-outline btn-primary'>Editar Tarea</button>
            </div>
          </form>
        </Modal>

        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          cursor={'pointer'} 
          className="text-error" 
          size={25}
        />

        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg text-primary-content font-bold">¿Estás seguro de borrar la tarea?</h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn btn-outline btn-primary">Confirmar</button>
            <button onClick={() => setOpenModalDelete(false)} className="btn btn-outline btn-error">Salir</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default TaskComponent;
