export default function Diagrams() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Diagrams and Visuals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src="/assets/diagrams/architecture.svg"
          alt="System Architecture"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src="/assets/diagrams/workflow.png"
          alt="Workflow Diagram"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
