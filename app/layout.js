'use client';
import { createContext, useContext, useState } from 'react';
import Link from 'next/link';
import './globals.css';

const TodoContext = createContext(null);

export const useTodos = () => {
  const context = useContext(TodoContext);
  //if (!context) throw new Error('useTodos must be used within a TodoProvider');
  return context;
};

export default function RootLayout({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans text-white bg-black min-h-screen flex flex-col">
        <TodoContext.Provider value={{ todos, setTodos }}>
          
          <header  className="bg-[#323740] px-4 py-2 font-extrabold text-3xl font-mono">Todoly - Todo List</header>
          <header className="bg-[#323740] px-4 py-2 m-0">
            <nav className="flex gap-8 ">
              <Link href="/add" className="hover:text-[#ffea00] transition font-mono">Add</Link>
              <Link href="/view" className="hover:text-[#ffea00] transition font-mono">View</Link>
              <Link href="/edit" className="hover:text-[#ffea00] transition font-mono">Edit</Link>
            </nav>
          </header>

          {/* Page content */}
          <main className=" flex-grow p-4 flex  mt-5">{children}</main> 

          {
          <footer className="bg-[#323740] text-white px-4 py-2 text-center text-sm text-gray-600 pt-2 font-mono">
            &copy; {new Date().getFullYear()} Todoly by Samarth Bhatia
          </footer> }
        </TodoContext.Provider>
      </body>
    </html>
  );
}
