import Link from "next/link";

export default function Employees() {
    const employees = [
        { id: 1, name: "John Doe", position: "Software Engineer" },
        { id: 2, name: "Jane Smith", position: "Product Manager" },
        { id: 3, name: "Alice Johnson", position: "UX Designer" },
    ];


  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col py-32 px-16 bg-black">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Employees Page
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is the employees page.
          </p>
      </main>
    </div>
  );
}