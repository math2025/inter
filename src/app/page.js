export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to My Internship Presentation
      </h1>
      <p className="text-lg mb-6">
        Explore my projects, timeline, diagrams, and reports.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="/timeline"
          className="block p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold">Project Timeline</h2>
          <p>Track my progress and milestones.</p>
        </a>
        <a
          href="/diagrams"
          className="block p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold">Diagrams & Visuals</h2>
          <p>View system architecture and visuals.</p>
        </a>
        <a
          href="/reports"
          className="block p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold">Reports & Downloads</h2>
          <p>Access my final reports and documents.</p>
        </a>
      </div>
    </div>
  );
}
