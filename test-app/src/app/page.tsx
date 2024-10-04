import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow flex flex-col items-center justify-center gap-8">
        <Image
          className="rounded-full"
          src="" // Replace with your photo
          alt="Robert Olariu"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-3xl font-bold">Robert Olariu</h1>
        <p className="text-xl text-center max-w-md">
          A brief introduction about yourself and what you do.
        </p>
        <div className="flex gap-4">
          <a
            className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
            href="https://linkedin.com/in/your-profile" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full bg-gray-200 text-gray-800 px-4 py-2 hover:bg-gray-300 transition-colors"
            href="https://github.com/your-username" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>
      <footer className="mt-8 text-center text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
