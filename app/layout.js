import './globals.css';
import { Inter } from 'next/font/google';
import TodoProvider from '@/context/TodoContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Todoly - Todo List',
  description: 'A beautifully minimal todo app by Samarth Bhatia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col text-white bg-black`}>
        <TodoProvider>
          <header className="bg-[#323740] px-4 py-2 font-extrabold text-3xl font-mono">
            Todoly - Todo List
          </header>
          <header className="bg-[#323740] px-4 py-2 m-0">
            <nav className="flex gap-8">
              <a href="/add" className="hover:text-[#ffea00] transition font-mono">Add</a>
              <a href="/view" className="hover:text-[#ffea00] transition font-mono">View</a>
              <a href="/edit" className="hover:text-[#ffea00] transition font-mono">Edit</a>
            </nav>
          </header>
          <main className="flex-grow p-4 mt-5">{children}</main>
          <footer className="bg-[#323740] text-white px-4 py-2 text-center text-sm text-gray-600 pt-2 font-mono">
            &copy; {new Date().getFullYear()} Todoly by Samarth Bhatia
          </footer>
        </TodoProvider>
      </body>
    </html>
  );
}
