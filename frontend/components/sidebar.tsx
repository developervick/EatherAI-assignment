import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";



export default function Sidebar() {
  return (
    <div className="w-64 text-white flex flex-col border-r border-gray-500 fixed h-screen">
      <h2 className="text-2xl ml-10 mt-5 font-bold p-4">Sidebar</h2>
      <nav className="flex flex-col gap-4 p-4 pl-5 text-lg">
        <Link href="/" className="hover:bg-gray-700 rounded px-3 py-2">
          <div className="flex items-center">
            <IoMdHome className="inline-block mr-2 mb-1" />
            Home
          </div>
        </Link>
        <Link href="/employees" className="hover:bg-gray-700 rounded px-3 py-2">
          <div className="flex items-center">
            <MdPeopleAlt className="inline-block mr-2 mb-1" />
            Employees
          </div>
        </Link>
        <Link href="/settings" className="hover:bg-gray-700 rounded px-3 py-2">
          <div className="flex items-center">
            <IoMdSettings className="inline-block mr-2 mb-1" />
            Settings
          </div>
        </Link>
      </nav>
    </div>
  );
}
