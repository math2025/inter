export default function MilestoneTable({ milestones }) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2 bg-gray-800 text-white">Milestone</th>
          <th className="border p-2 bg-gray-800 text-white">Date</th>
          <th className="border p-2 bg-gray-800 text-white">Status</th>
        </tr>
      </thead>
      <tbody>
        {milestones.map((milestone, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="border p-2">{milestone.name}</td>
            <td className="border p-2">{milestone.date}</td>
            <td className="border p-2">{milestone.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
