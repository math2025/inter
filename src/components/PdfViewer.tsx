// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// export default function PdfViewer({ fileUrl }: { fileUrl: string }) {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <div style={{ height: '600px' }}>
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//         <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
//       </Worker>
//     </div>
//   );
// }
"use client";

export default function PdfViewer({ fileUrl }: { fileUrl: string }) {
  return (
    <div className="w-full h-[600px] border shadow rounded-lg overflow-hidden">
      <iframe
        src={fileUrl}
        title="PDF Viewer"
        className="w-full h-full"
        frameBorder="0"
      />
    </div>
  );
}
