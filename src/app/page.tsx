"use client";

import { useRef, useState } from "react";
import ATSScoreCard from "../components/ATSScoreCard";
import MissingKeywordsCard from "../components/MissingKeywordsCard";
import SkillsCard from "../components/SkillsCard";
import UploadBox from "../components/UploadBox";

export default function Home() {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [atsScore, setAtsScore] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      setFileName("");
      return;
    }

    setError("");
    setFileName(file.name);
    setShowResults(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          AI Resume Analyzer
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          Analyze your resume with AI, improve ATS score,
          identify missing skills, and get actionable suggestions.
        </p>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            handleFile(file);
          }}
        />

        {/* Upload Box */}
        <UploadBox
          fileName={fileName}
          error={error}
          isDragging={isDragging}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => {
            setIsDragging(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);

            const file = e.dataTransfer.files[0];

            if (!file) return;

            handleFile(file);
          }}
        />

        {/* Analyze Button */}
        <button
          disabled={!fileName || isAnalyzing}
          onClick={() => {
            setIsAnalyzing(true);

            setTimeout(() => {
              const score =
                Math.floor(Math.random() * 31) + 70;

              setAtsScore(score);
              setIsAnalyzing(false);
              setShowResults(true);
            }, 3000);
          }}
          className="mt-8 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isAnalyzing
            ? "Analyzing..."
            : "Analyze Resume"}
        </button>

        {/* Loading */}
        {isAnalyzing && (
          <div className="mt-6">
            <p className="text-blue-400 text-lg animate-pulse">
              Analyzing Resume...
            </p>
          </div>
        )}

        {/* Results */}
        {showResults && (
          <div className="mt-10 grid gap-6">
            <ATSScoreCard score={atsScore} />

            <SkillsCard
              skills={[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
              ]}
            />

            <MissingKeywordsCard
              keywords={[
                "Docker",
                "AWS",
                "CI/CD",
              ]}
            />
          </div>
        )}
      </div>
    </main>
  );
}