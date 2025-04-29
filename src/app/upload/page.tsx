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
    <div className="min-h-screen flex flex-col bg-neutral-900">
      <NavBar />
      <div className="flex-grow flex items-center justify-center p-8">
      <div className="p-8 max-w-2xl w-full mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg shadow-lg">
        <div className="w-full">
          <h1 className="text-3xl font-semibold mb-6 text-center">Video Transcoder</h1>

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
          
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Format:</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-40 p-3 bg-white text-gray-800 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="avi">avi</option>
              <option value="flv">flv</option>
              <option value="mov">mov</option>
              <option value="mp4">mp4</option>
              <option value="mpg">mpg</option>
              <option value="ogg">ogg</option>
              <option value="webm">webm</option>
            </select>
          </div>
  
          <div className="mb-10">
            <label className="block text-lg font-medium mb-2">Resolution:</label>
            <div className="flex gap-4">
              {['480p', '720p', '1080p'].map((res) => (
                <Button
                  key={res}
                  variant={resolution === res ? "default" : "outline"}
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
              className="w-full py-3 text-xl font-semibold rounded-lg disabled:opacity-50 transition-all duration-300"
            >
              Transcode
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );  
}