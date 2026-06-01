export default function AddProjectButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-3 py-2"
    >
      Add Project
    </button>
  );
}
