export const SkillsForm = () => {
  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs max-w-3xl">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">
          Add Tech Stack Component
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Skill Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-700">
            Skill Name
          </label>
          <input
            type="text"
            className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-2.5 transition-all placeholder:text-gray-400 outline-hidden"
            placeholder="e.g., React, Node.js, Zustand"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Skill Level */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-700">
            Expertise Level (1-5)
          </label>
          <input
            type="number"
            min="1"
            max="5"
            className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-2.5 transition-all outline-hidden"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-700">
            Category Group
          </label>
          <select
            className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-2.5 transition-all outline-hidden appearance-none cursor-pointer"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="tools">Tools / Others</option>
          </select>
        </div>
      </div>

      {/* Form CTA Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleAdd}
          className="inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 shadow-sm rounded-xl px-4 py-2.5 transition-all duration-200 gap-2 cursor-pointer w-full sm:w-auto"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Skill
        </button>
      </div>
    </div>
  );
};
