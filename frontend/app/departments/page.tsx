"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdAddCircle } from "react-icons/io";
import Link from "next/link";
import { FaBuildingUser } from "react-icons/fa6";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "Engineering",
      description:
        "Responsible for software development and technical projects.",
    },
    {
      id: 2,
      name: "Product",
      description: "Responsible for product strategy and roadmap.",
    },
    {
      id: 3,
      name: "Design",
      description: "Responsible for user experience and visual design.",
    },
    {
      id: 4,
      name: "Data Science",
      description: "Responsible for data analysis and machine learning.",
    },
    {
      id: 5,
      name: "DevOps",
      description: "Responsible for deployment and infrastructure management. dbkjwewk jedbwqd djbqw dwqmned jqw qwmdnmwq djqw dmq wdbqw d qewme kjqwb qwm edeqwide w dqnw edj wend mqw w mqw e qjwe dnkw nde qjwk dknq wd qkw dk qwkd ekwj1 dkjw nkd nwq kj dnkw ewq kq dnkw qd wqnke dnkqw dn qwj dkqw  ewq dnqw nk qnk kjqw nwq dn qe dnqwke dk w dnkq wdnk wqdkn qwkd wq",
    },
    {
      id: 6,
      name: "QA",
      description: "Responsible for quality assurance and testing.",
    },
    {
      id: 7,
      name: "Technical Writing",
      description: "Responsible for creating technical documentation.",
    },
    {
      id: 8,
      name: "HR",
      description: "Responsible for human resources and employee relations.",
    },
    {
      id: 9,
      name: "Marketing",
      description: "Responsible for marketing and brand management.",
    },
    {
      id: 10,
      name: "Sales",
      description: "Responsible for sales and customer acquisition.",
    },
  ]);

  const fetchDepartments = () => {
    
  }

  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col py-8 px-16 bg-black">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Department Page
        </h1>
        <div className="grid grid-cols-6">
          {/* Employee table */}
          <div className="mt-10 space-y-4 col-span-4 overflow-scroll h-[70vh] no-scrollbar rounded-lg p-4">
            {departments.map((department) => (
              <div
                key={department.id}
                className="p-4 flex items-center border border-gray-700 rounded-lg"
              >
                <div className="flex flex-col justify-center mr-4">
                  <div className="flex justify-start items-center">
                    <FaBuildingUser className="mr-3 text-green-400" />
                    <h2 className="text-xl font-semibold text-gray-300">
                      {department.name}
                    </h2>
                  </div>
                  <p className="ml-4 text-sm text-gray-400">
                    {department.description}
                  </p>
                </div>
                <button className="ml-auto px-3 py-1 text-sm text-white rounded hover:bg-red-600 transition-colors duration-200 border border-red-600">
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="col-span-2 mx-10 flex items-start justify-center">
            <button className="px-4 py-2 text-white rounded hover:bg-blue-600 transition-colors duration-200 border border-blue-600">
              <Link href="/departments/new">
                Add Department{" "}
                <IoMdAddCircle className="inline-block ml-1 mb-1 text-blue-400" />
              </Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
