"use client";

import { useEffect, useRef, useState } from "react";
import PdfViewer from "../components/PdfViewer";
import { FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";

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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#deeaff] px-6 py-12 text-gray-800 font-sans transition-colors duration-300 flex flex-col items-center">
  {/* Section Divider */}
      <div className="w-24 h-2 bg-sky-500 rounded-full mx-auto mb-6"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className=" mb-4 ml-10">
          Internship Documentation
        </h1> 
         <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          This document outlines the work completed during my 2-month
          internship, covering technical designs, project inputs, and
          categorized project data.
        </p>
        {/* <h1 className="ml-10">
          Internship Documentation
        </h1> */}
      </div>

      {/* Contents List */}
{/* Contents List */}
<div className="flex justify-center items-center my-8">
  <div className="flex flex-col items-center gap-3 text-blue-600 font-medium text-lg">
    {sections.map((sec) => (
      <p>
      <a
        key={sec.id}
        href={`#${sec.id}`}
        className={`transition hover:text-blue-800 text-center ${
          activeSection === sec.id ? "underline font-bold" : ""
        }`}
      >
        {sec.title}
      </a>
      </p>
    ))}
  </div>
</div>



      {/* Sections and Subsections */}
      <div className="max-w-6xl mx-auto space-y-20">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="scroll-mt-20 fade-in"
          >
            <h3 className="text-3xl font-bold text-center mb-10 text-blue-900 underline underline-offset-8">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 text-center">
              {section.items.map((item, idx) => {
                const itemKey = `${section.id}-${idx}`;
                const isOpen = expanded === itemKey;

                return (
                  <div className="card-container">
                  <div
                    key={itemKey}
                    className="card p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <FiFileText size={24} className="text-blue-500" />
                      <h4 className="text-lg font-semibold text-gray-700">
                        {item}
                      </h4>
                      {/* <button
                        onClick={() => setExpanded(isOpen ? null : itemKey)}
  className={`btn-primary text-sm flex items-center gap-1 transition-transform duration-300 ${
    isOpen ? "transform rotate-180" : ""
  }`}
                       >
  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
  {isOpen ? "Hide PDF" : "View PDF"}
</button> */}
<button
  onClick={() => setExpanded(isOpen ? null : itemKey)}
  className={`my-button text-sm flex items-center gap-1 transition-transform duration-300 ${
    isOpen ? "rotate-180" : ""
  }`}
>
  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
  {isOpen ? "Hide PDF" : "View PDF"}
</button>

                    </div>
                    </div>

                   {isOpen && (
  <div
    className="mt-4 animate-fade-in border rounded overflow-hidden shadow-inner"
    style={{
      maxHeight: "600px",
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}
  >
    <PdfViewer fileUrl={section.pdfUrl} />
  </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
