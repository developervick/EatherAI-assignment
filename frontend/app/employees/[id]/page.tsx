"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/utils/api";
import toast from 'react-hot-toast';
import Image from "next/image";

export default function EmployeePage() {

    const [attandenceRecords, setAttendanceRecords] = useState([
        { date: "2024-06-01", status: true },
        { date: "2024-06-02", status: false },
        { date: "2024-06-03", status: true },
        { date: "2024-06-04", status: true },
        { date: "2024-06-05", status: false },
        { date: "2024-06-06", status: true },
        { date: "2024-06-07", status: true },
        { date: "2024-06-08", status: false },
        { date: "2024-06-09", status: true },
        { date: "2024-06-10", status: true },
    ]);

    

    return (
        <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex w-full flex-col py-8 px-16 bg-black">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Employee Detail Page
                </h1>
                <h3 className="text-lg text-zinc-400 dark:text-zinc-500">Viewing employee details</h3>
                <div className="bg-black flex mt-10 rounded-2xl p-6 min-w-[70%] w-min border border-gray-500">
                    <div >
                        <Image width={32} height={32} src="/employee-placeholder.png" alt="Employee Avatar" className="h-16 w-16 rounded-full object-cover border border-gray-500" />
                    </div>
                    <div className="ml-10">
                        <h3 className="text-xl font-bold text-gray-500">Employee ID</h3>
                        <p className="text-gray-300">12345</p>
                    </div>
                    <div className="ml-10">
                        <h3 className="text-xl font-bold text-gray-500">Full Name</h3>
                        <p className="text-gray-300">John Doe</p>
                    </div>
                    <div className="ml-10">
                        <h3 className="text-xl font-bold text-gray-500">Email</h3>
                        <p className="text-gray-300">john.doe@example.com</p>
                    </div>
                    <div className="ml-10">
                        <h3 className="text-xl font-bold text-gray-500">Department</h3>
                        <p className="text-gray-300">Engineering</p>
                    </div>   
                                  
                </div>
                <div className="mt-4 flex gap-4">
                    <div className="flex items-center">
                        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors hover:cursor-pointer">Delete Employee</button>
                    </div>
                    <div className="flex items-center">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors hover:cursor-pointer">Add Attendance</button>
                    </div> 
                </div>
                <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-gray-300 mt-5">
                    Attendance Record
                </h1>
                <div className="mt-6">
                    <table className="min-w-full bg-black border border-gray-500">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-500 text-left text-gray-500">Date</th>
                                <th className="py-2 px-4 border-b border-gray-500 text-left text-gray-500">Status</th>
                                <th className="py-2 px-4 border-b border-gray-500 text-left text-gray-500 justify-center flex">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {attandenceRecords.map((record, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b border-gray-500 text-gray-300">{record.date}</td>
                                    <td className={`py-2 px-4 border-b border-gray-500 ${record.status ? 'text-green-500' : 'text-red-500'}`}>
                                        {record.status ? "Present" : "Absent"}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-500 text-gray-300 flex justify-center">
                                        <button className={`px-3 py-2 ${record.status ? 'border border-red-500 hover:bg-red-700' : 'border border-green-500 hover:bg-green-700'} text-white rounded-md transition-colors hover:cursor-pointer`}>{record.status ? "Mark Absent" : "Mark Present"}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Paginations */}
                    <div className="flex justify-center my-4">
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors hover:cursor-pointer mr-2">Previous</button>
                        {/* page count */}
                        <div className="pl-2 pr-4 py-2 text-white rounded-md">Page 1 of 5</div>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors hover:cursor-pointer">Next</button>
                    </div>
                </div>
            </main>
        </div>
    );
}