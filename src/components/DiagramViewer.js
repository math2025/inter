export default function DiagramViewer({ src, alt }) {
  return (
    <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-md" />
  );
}
