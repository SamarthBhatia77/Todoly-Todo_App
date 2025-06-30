'use client';
import { useState } from 'react';
import { useTodos } from '../layout';
import { PencilSquareIcon, PlusIcon, TrashIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function EditTodosPage() {
  const { todos, setTodos } = useTodos();
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const handleSave = () => {
    if (editIndex === null) return;
    const updated = [...todos];
    updated[editIndex] = editText;
    setTodos(updated);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className='text-[20px]'>
      <h1 className='font-bold text-3xl font-mono pb-3'>Edit/Delete your Tasks</h1>
      {todos.length===0 ? (<p className='mt-4 font-mono'>No tasks added yet. Please add tasks from the "Add" option above.</p>):
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
              <div className='flex items-center'>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className='bg-white text-black w-75 rounded font-mono focus:outline-none mr-4'
                />
                <button onClick={handleSave} className='bg-[#45ad7d] p-2 rounded cursor-pointer hover:bg-[#09db7b] transition'>
                  <PlusIcon className='h-4 w-4 text-white'/>
                </button>
              </div>
              </>
            ) : (
              <div className='my-4 flex items-center gap-2 text-white font-mono'>
                 <ArrowLongRightIcon className="h-6 w-6 text-white" />{todo}
                <button onClick={() => handleEdit(index)} 
                  className='mx-4 bg-[#5e9cc4] text-black p-2 rounded hover:bg-blue-600 transition cursor-pointer'>
                  <PencilSquareIcon className="h-4 w-4 text-white"/>
                </button>
                <button onClick={() => handleDelete(index)} 
                className='bg-[#c95351] text-white p-2  rounded hover:bg-red-600 transition cursor-pointer'>
                    <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul> }
    </div>
  );
}

