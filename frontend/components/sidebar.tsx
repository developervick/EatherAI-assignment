import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col fixed border-r border-gray-800">
      <h2 className="text-2xl ml-10 mt-5 font-bold p-4">Sidebar</h2>
      <nav className="flex flex-col gap-4 p-4 pl-5 text-lg">
        <Link href="/" className="hover:bg-gray-700 rounded px-3 py-2">
          Home
        </Link>
        <Link href="/employees" className="hover:bg-gray-700 rounded px-3 py-2">
          Employees
        </Link>
        <Link href="/settings" className="hover:bg-gray-700 rounded px-3 py-2">
          Settings
        </Link>
      </nav>
    </div>
  );
}