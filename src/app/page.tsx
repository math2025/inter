"use client";

import { useEffect, useRef, useState } from "react";
import PdfViewer from "../components/PdfViewer";
import { FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";

const sections = [
  {
    id: "capex",
    title: "CAPEX",
    items: [
      {
        label: "D#1",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/capex/d1-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/capex/d1-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/capex/d1-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/capex/d1-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/capex/d1-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/capex/d1-spareparts.pdf",
          },
        ],
      },
      {
        label: "D#3",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/capex/d3-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/capex/d3-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/capex/d3-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/capex/d3-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/capex/d3-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/capex/d3-spareparts.pdf",
          },
        ],
      },
      {
        label: "D#6D",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/capex/d6d-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/capex/d6d-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/capex/d6d-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/capex/d6d-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/capex/d6d-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/capex/d6d-spareparts.pdf",
          },
        ],
      },
      {
        label: "D#6E",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/capex/d6e-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/capex/d6e-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/capex/d6e-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/capex/d6e-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/capex/d6e-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/capex/d6e-spareparts.pdf",
          },
        ],
      },
      {
        label: "D#6F",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/capex/d6f-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/capex/d6f-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/capex/d6f-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/capex/d6f-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/capex/d6f-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/capex/d6f-spareparts.pdf",
          },
        ],
      },
      {
        label: "D#7",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/capex/d7-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/capex/d7-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/capex/d7-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/capex/d7-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/capex/d7-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/capex/d7-spareparts.pdf",
          },
        ],
      },
      {
        label: "D#8",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/capex/d8-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/capex/d8-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/capex/d8-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/capex/d8-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/capex/d8-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/capex/d8-spareparts.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "oalp",
    title: "OALP",
    items: [
      {
        label: "D#1",//PREVIOUS NAME OF THIS WAS ENG.... SO FILE NAMES AND PATHS ARE NAMED ACCORDINGLY LIKE ENG
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/oalp/eng-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/oalp/eng-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/oalp/eng-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/oalp/eng-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/oalp/eng-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/oalp/eng-spareparts.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "oilindia",
    title: "OIL INDIA",
    items: [
      {
        label: "Thermal WH 2023 Dsg",
        parts: [
          {
            name: "Running Procedure RP",
            pdfUrl: "/pdfs/oilindia/thermalwh2023-rp.pdf",
          },
          {
            name: "Check List",
            pdfUrl: "/pdfs/oilindia/thermalwh2023-checklist.pdf",
          },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/oilindia/thermalwh2023-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/oilindia/thermalwh2023-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/oilindia/thermalwh2023-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/oilindia/thermalwh2023-spareparts.pdf",
          },
        ],
      },
      {
        label: "Thermal WH 2025 Dsg",
        parts: [
          {
            name: "Running Procedure RP",
            pdfUrl: "/pdfs/oilindia/thermalwh2025-rp.pdf",
          },
          {
            name: "Check List",
            pdfUrl: "/pdfs/oilindia/thermalwh2025-checklist.pdf",
          },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/oilindia/thermalwh2025-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/oilindia/thermalwh2025-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/oilindia/thermalwh2025-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/oilindia/thermalwh2025-spareparts.pdf",
          },
        ],
      },
      {
        label: "OIL MLT Dsg",
        parts: [
          {
            name: "Running Procedure RP",
            pdfUrl: "/pdfs/oilindia/oilmlt-rp.pdf",
          },
          { name: "Check List", pdfUrl: "/pdfs/oilindia/oilmlt-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/oilindia/oilmlt-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/oilindia/oilmlt-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/oilindia/oilmlt-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/oilindia/oilmlt-spareparts.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "ongcthermal",
    title: "ONGC Thermal",
    items: [
      {
        label: "2023 Dsg",
        parts: [
          {
            name: "Running Procedure RP",
            pdfUrl: "/pdfs/ongcthermal/2023-rp.pdf",
          },
          {
            name: "Check List",
            pdfUrl: "/pdfs/ongcthermal/2023-checklist.pdf",
          },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/ongcthermal/2023-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/ongcthermal/2023-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/ongcthermal/2023-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/ongcthermal/2023-spareparts.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "ongctom",
    title: "ONGC TOM",
    items: [
      {
        label: "2019 Dsg",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/ongctom/2019-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/ongctom/2019-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/ongctom/2019-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/ongctom/2019-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/ongctom/2019-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/ongctom/2019-spareparts.pdf",
          },
        ],
      },
      {
        label: "WO",
        parts: [
          { name: "Running Procedure RP", pdfUrl: "/pdfs/ongctom/wo-rp.pdf" },
          { name: "Check List", pdfUrl: "/pdfs/ongctom/wo-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/ongctom/wo-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/ongctom/wo-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/ongctom/wo-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/ongctom/wo-spareparts.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "cairnmls",
    title: "Cairn MLS",
    items: [
      {
        label: "Raava",
        parts: [
          {
            name: "Running Procedure RP",
            pdfUrl: "/pdfs/cairnmls/raava-rp.pdf",
          },
          { name: "Check List", pdfUrl: "/pdfs/cairnmls/raava-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/cairnmls/raava-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/cairnmls/raava-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/cairnmls/raava-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/cairnmls/raava-spareparts.pdf",
          },
        ],
      },
      {
        label: "2024 Dsg",
        parts: [
          {
            name: "Running Procedure RP",
            pdfUrl: "/pdfs/cairnmls/2024-rp.pdf",
          },
          { name: "Check List", pdfUrl: "/pdfs/cairnmls/2024-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/cairnmls/2024-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/cairnmls/2024-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/cairnmls/2024-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/cairnmls/2024-spareparts.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "ongcmls",
    title: "ONGC MLS",
    items: [
      {
        label: "39Wells expl.",
        parts: [
          {
            name: "Running Procedure RP",
            pdfUrl: "/pdfs/ongcmls/39wells-rp.pdf",
          },
          { name: "Check List", pdfUrl: "/pdfs/ongcmls/39wells-checklist.pdf" },
          {
            name: "Safe working instructions",
            pdfUrl: "/pdfs/ongcmls/39wells-safe.pdf",
          },
          {
            name: "Details of Equipment",
            pdfUrl: "/pdfs/ongcmls/39wells-equipment.pdf",
          },
          {
            name: "Details of Running tools",
            pdfUrl: "/pdfs/ongcmls/39wells-runningtools.pdf",
          },
          {
            name: "Details of Spare parts",
            pdfUrl: "/pdfs/ongcmls/39wells-spareparts.pdf",
          },
        ],
      },
    ],
  },
];

export default function Home() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedPart, setExpandedPart] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId: string, itemIdx?: number) => {
    const sectionEl = document.getElementById(sectionId);
    let targetEl: HTMLElement | null = sectionEl;

    if (itemIdx !== undefined && sectionEl) {
      const subItemEl = sectionEl.querySelectorAll("[data-itemkey]")[itemIdx];
      if (subItemEl) targetEl = subItemEl as HTMLElement;
    }

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    setExpandedItem(itemIdx !== undefined ? `${sectionId}-${itemIdx}` : null);
  };

  return (
    <div className="min-h-screen bg-[#deeaff] px-6 py-12 text-gray-800 font-sans transition-colors duration-300 flex flex-col items-center">
      <div className="custom-image-wrapper mb-8">
        <img
          src="/images/slb-2022-seeklogo.png"
          alt="Center Image"
          className="custom-image"
        />
      </div>


{/* CONTENTS NAVIGATION */}
<div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  margin: '2rem 0' 
}}>
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    gap: '1rem', 
    color: '#2563eb !important', 
    fontWeight: '500', 
    fontSize: '1.125rem' 
  }}>
    {sections.map((sec) => {
      const isOpen = expandedSection === sec.id;

      return (
        <div key={sec.id}>
          {/* Main Section Title with Toggle */}
          <p style={{ 
            marginBottom: '0.25rem', 
            textAlign: 'center', 
            color: '#2563eb !important' 
          }}>
            <button
              onClick={() =>
                setExpandedSection((prev) =>
                  prev === sec.id ? null : sec.id
                )
              }
              style={{
                fontSize: '1.125rem',
                fontWeight: activeSection === sec.id ? '700' : '500',
                color: `${activeSection === sec.id ? '#e2e5ef' : '#2563eb'} !important`,
                background: 'none',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                transition: 'color 0.2s ease, transform 0.2s ease',
                textAlign: 'center',
                textDecoration:  'underline' // underline the section title
              }}
              // onMouseEnter={(e) => {
              //   const target = e.target as HTMLElement;
              //   target.style.setProperty('color', '#1e40af', 'important');
              // }}
              // onMouseLeave={(e) => {
              //   const target = e.target as HTMLElement;
              //   const color = activeSection === sec.id ? '#e2e5ef' : '#2563eb';
              //   target.style.setProperty('color', color, 'important');
              // }}
            >
              {isOpen ? "▼" : "►"} {sec.title}
            </button>
          </p>

          {/* Sub-items only if expanded */}
          {isOpen && (
            <ul style={{ 
              marginLeft: '1.25rem',
              marginTop: '0.25rem',
              listStyleType: 'disc',
              fontSize: '0.875rem',
              color: '#1e40af !important',
              fontWeight: '400 !important',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              listStylePosition: 'inside',
              paddingLeft: '0',
              textAlign: 'center'
            }}>
              {sec.items.map((item, idx) => (
                <li key={idx} style={{ color: '#1e40af !important' }}>
                  <button
                    onClick={() => handleNavClick(sec.id, idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '0',
                      font: 'inherit',
                      color: '#1e40af !important',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease-in-out',
                      textAlign: 'left',
                      marginTop: '0.25rem'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.setProperty('color', '#1e3a8a', 'important');
                      target.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.setProperty('color', '#1e40af', 'important');
                      target.style.textDecoration = 'none';
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    })}
  </div>
</div>

      {/* <hr className="my-line" /> */}
      <hr></hr>

      {/* MAIN CONTENT SECTION */}
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
                const isItemExpanded = expandedItem === itemKey;

                return (
                  <div
                    key={itemKey}
                    data-itemkey={itemKey}
                    className="card-container"
                  >
                    <div className="card">
                      <div className="flex flex-col items-center gap-2">
                        <FiFileText size={28} className="doc-icon" />

                        <h4 className="text-lg font-semibold text-gray-700">
                          {item.label}
                        </h4>
                        <button
                          onClick={() =>
                            setExpandedItem(isItemExpanded ? null : itemKey)
                          }
                          className={`my-button text-sm flex items-center gap-1 transition-transform duration-300 ${
                            isItemExpanded ? "rotate-180" : ""
                          }`}
                        >
                          {isItemExpanded ? <FiChevronUp /> : <FiChevronDown />}
                          {isItemExpanded ? "Hide" : "Project Details"}
                        </button>
                      </div>
                    </div>

                    {isItemExpanded && (
                      <div className="mt-4 space-y-4">
                        {item.parts.map((part, partIdx) => {
                          const partKey = `${itemKey}-${partIdx}`;
                          const isPartExpanded = expandedPart === partKey;

                          return (
                            <div
                              key={partIdx}
                              className="border rounded p-2 shadow-inner"
                            >
                              <div className="grid grid-cols-2 items-center">
                                <div className="text-sm font-semibold">
                                  {part.name}
                                </div>
                                <div className="flex justify-end">
                                  <button
                                    onClick={() =>
                                      setExpandedPart(
                                        isPartExpanded ? null : partKey
                                      )
                                    }
                                    className="btn-primary text-xs"
                                  >
                                    {isPartExpanded ? "Hide" : "View"}
                                  </button>
                                </div>
                              </div>

                              {isPartExpanded && (
                                <div className="mt-2">
                                  <PdfViewer fileUrl={part.pdfUrl} />
                                </div>
                              )}
                            </div>
                          );
                        })}
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
