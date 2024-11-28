const EmptyStateCard: React.FC<{ type: "Flight" | "Hotel" | "Activity" }> = ({ type }) => (
    <div className="bg-white rounded-lg shadow p-4 text-center border-gray-200">
      <p className="text-gray-500">No {type} details added yet.</p>
    </div>
  );
  