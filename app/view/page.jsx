'use client';
import { useTodos } from '../layout';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
export default function ViewTodosPage() {
  const { todos } = useTodos(); //no need of setTodos, we only need todos

  return (
    <div className='text-[20px]'>
      <h1 className='font-bold text-3xl font-mono pb-3'>View All Tasks</h1>
      {todos.length === 0 ? (
        <p className='mt-4 font-mono'>No tasks added yet. Please add tasks from the "Add" option above.</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className='mt-4 flex items-center gap-2 text-white font-mono'>
              <ArrowLongRightIcon className="h-6 w-6 text-white" />{todo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
