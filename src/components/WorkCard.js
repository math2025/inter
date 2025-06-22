export default function WorkCard({ title, description }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-gray-800 text-white">
      <h3 className="text-lg font-bold text-blue-300">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
