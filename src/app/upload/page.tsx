"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../components/ui/Button";
import NavBar from "../components/ui/NavBar";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState("mp4");
  const [resolution, setResolution] = useState("720p");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'video/*': []
    },
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleTranscode = () => {
    console.log("Transcoding:", file, format, resolution);
    // Call your backend API here
  };

  return (
    <div>
      <NavBar/>
    <div className="p-8 max-w-xl mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Upload Your Video</h1>

      <div
        {...getRootProps()}
        className="border-4 border-dashed border-gray-300 p-8 rounded-lg text-center cursor-pointer hover:bg-blue-200 transition-all duration-300 mb-6"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-xl text-blue-600">Drop the file here...</p>
        ) : file ? (
          <p className="text-xl text-green-500">{file.name}</p>
        ) : (
          <p className="text-lg text-gray-200">Drag & drop a video file here, or click to select</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Format</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="w-full p-3 bg-white text-gray-800 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        >
          <option value="mp4">MP4</option>
          <option value="webm">WebM</option>
          <option value="mov">MOV</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Resolution</label>
        <div className="flex gap-4 justify-center">
          {['480p', '720p', '1080p'].map((res) => (
            <Button
              key={res}
              //variant={resolution === res ? "default" : "outline"}
              onClick={() => setResolution(res)}
            >
              {res}
            </Button>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={handleTranscode}
          //disabled={!file}
          className="w-full py-3 bg-indigo-600 text-white text-xl font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-all duration-300"
        >
          Transcode
        </Button>
      </div>
    </div>
    </div>
  );
}
