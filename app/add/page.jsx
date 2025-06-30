'use client';
import { useState } from 'react';
import { useTodos } from '../layout';
import { useRouter } from 'next/navigation';
import '../globals.css';
import {PlusIcon} from '@heroicons/react/24/solid';

export default function AddTodoPage() {
  //pure REACT code
  const [input, setInput] = useState('');
  const { todos, setTodos } = useTodos();
  const router = useRouter();

  const handleAdd = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
    //router.push('/view');
  };

  return (
    <div className='text-[20px]'>
      <h1 className='font-bold text-3xl font-mono pb-3 flex item-align-center'>Add New Task</h1>
      <div className='flex items-center gap-2 mt-7'>
       <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Task"className=' w-[21rem] px-3 py-2 bg-white text-black rounded font-mono focus:outline-none'/>
      <button onClick={handleAdd} className='bg-[#07b867] p-2 rounded cursor-pointer hover:bg-[#09db7b] transition'>
         <PlusIcon className='h-8 w-8 text-white'/>
      </button>
      </div>
    </div>
  );
}
