import Link from "next/link";
import EmployeeListTile from "@/components/employee-list";
import { IoMdAddCircle } from "react-icons/io";


export default function Employees() {
    const employees = [
        { id: 1, name: "John Doe", position: "Software Engineer" },
        { id: 2, name: "Jane Smith", position: "Product Manager" },
        { id: 3, name: "Alice Johnson", position: "UX Designer" },
        { id: 4, name: "Bob Brown", position: "Data Scientist" },
        { id: 5, name: "Charlie Davis", position: "DevOps Engineer" },
        { id: 6, name: "Eve Wilson", position: "QA Engineer" },
        { id: 7, name: "Frank Miller", position: "Technical Writer" },
        { id: 8, name: "Grace Lee", position: "HR Manager" },
        { id: 9, name: "Hank Green", position: "Marketing Specialist" },
        { id: 10, name: "Ivy White", position: "Sales Representative" },
    ];


  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col py-8 px-16 bg-black">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Employees Page
          </h1>
          <div className="grid grid-cols-6">
            {/* Employee table */}
            <div className="mt-10 space-y-4 col-span-4 overflow-scroll h-[70vh] no-scrollbar border border-gray-700 rounded-lg p-4">
              {employees.map((employee) => (
                <EmployeeListTile key={employee.id} 
                  name={employee.name} 
                  position={employee.position} 
                  id={employee.id} 
                  />
              ))}
            </div>
            <div className="col-span-2 mx-10 flex items-start justify-center">
              <button className="px-4 py-2 text-white rounded hover:bg-blue-600 transition-colors duration-200 border border-blue-600">
                <Link href="/employees/new">Add Employee <IoMdAddCircle className="inline-block ml-1 mb-1 text-blue-400" /></Link>
              </button>
            </div>
          </div>
      </main>
    </div>
  );
}