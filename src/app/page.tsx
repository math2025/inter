"use client";

import { useState } from "react";
import PdfViewer from "../components/PdfViewer";

const sections = [
  {
    id: "capex",
    title: "CAPEX",
    items: ["D#1", "D#3", "D#6D", "D#6E", "D#6F", "D#7", "D#8"],
    pdfUrl: "/pdfs/capex.pdf",
  },
  {
    id: "oalp",
    title: "OALP",
    items: ["Confirm with Eng. on released drawings"],
    pdfUrl: "/pdfs/oalp.pdf",
  },
  {
    id: "oilindia",
    title: "OIL INDIA",
    items: ["Thermal WH 2023", "Thermal WH 2025"],
    pdfUrl: "/pdfs/oilindia.pdf",
  },
  {
    id: "ongcthermal",
    title: "ONGC Thermal",
    items: ["2023 Dsg"],
    pdfUrl: "/pdfs/ongcthermal.pdf",
  },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>(null);

 return (
  <div className="min-h-screen bg-white px-6 sm:px-12 py-10 text-gray-800 font-sans">
    {/* Header / Intro */}
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Internship Documentation</h1>
      <p className="text-gray-600 text-lg">
        This document outlines the work completed during my 2-month internship,
        covering technical designs, project inputs, and categorized project data.
      </p>
    </div>

    {/* Contents List */}
    <div className="text-center mb-12">
      <h2 className="text-2xl font-semibold mb-4">CONTENTS</h2>
      <ul className="inline-block text-left space-y-2">
        {sections.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className="text-blue-600 hover:underline font-medium"
            >
              {sec.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Sections */}
    <div className="max-w-4xl mx-auto space-y-10">
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="scroll-mt-20 border-b pb-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{section.title}</h3>
            <button
              onClick={() =>
                setExpanded(expanded === section.id ? null : section.id)
              }
              className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
            >
              {expanded === section.id ? "− Hide" : "+ View PDF"}
            </button>
          </div>

          <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {expanded === section.id && (
            <div className="mt-4">
              <PdfViewer fileUrl={section.pdfUrl} />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
