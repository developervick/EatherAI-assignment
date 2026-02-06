import Link from "next/link";

export default function Employees() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-32 px-16 bg-black">
        <div className="flex flex-col bg-black mt-48 gap-6 self-center justify-self-start text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Employees Page
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is the employees page.
          </p>
        </div>
        <Link href="/" className="mt-8 text-blue-500 hover:underline">
          Go back to Home Page
        </Link>
      </main>
    </div>
  );
}