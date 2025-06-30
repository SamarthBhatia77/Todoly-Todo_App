'use client';
import { createContext, useContext, useState } from 'react';

const TodoContext = createContext(null);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodos must be used within a TodoProvider');
  return context;
};

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
