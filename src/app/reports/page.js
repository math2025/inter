export default function Reports() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Reports and Downloads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="/assets/reports/final-report.pdf"
          className="block p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold">Final Report</h2>
          <p>Download the final report of my internship.</p>
        </a>
        <a
          href="/assets/reports/midpoint-review.pdf"
          className="block p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold">Midpoint Review</h2>
          <p>Access the midpoint review document.</p>
        </a>
      </div>
    </div>
  );
}
