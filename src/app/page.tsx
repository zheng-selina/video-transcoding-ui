"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./components/ui/Button";
import NavBar from "./components/ui/NavBar";

export default function Home() {

  return (
    <div>
      <NavBar/>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="text-center text-4xl font-bold">Welcome to Transcodify</div>
      </div>
    </div>
  );
}
