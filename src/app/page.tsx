"use client";

import NavBar from "./components/ui/NavBar";

export default function Home() {

  return (
    <div>
      <NavBar/>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-zinc-900">
        <div className="flex items-center p-8 max-w-xl mx-auto rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Welcome to Transcodify
          </h1>
          <p className="text-2xl italic font-semibold line-clamp-2 pt-6">
            Transcode your videos with a click
          </p>
        </div>
      </div>
   </div>
  );
}
