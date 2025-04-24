"use client";

export default function NavBar() {
  return (
    <nav className="p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="text-white font-bold text-lg">
          <a href="/">Transcodify</a>
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="/upload" className="text-white hover:bg-blue-500 p-2 rounded">Upload</a>
          <a href="/" className="text-white hover:bg-blue-500 p-2 rounded">Track</a>
          <a href="/" className="text-white hover:bg-blue-500 p-2 rounded">Stream</a>
        </div>
      </div>
    </nav>
  );
}
