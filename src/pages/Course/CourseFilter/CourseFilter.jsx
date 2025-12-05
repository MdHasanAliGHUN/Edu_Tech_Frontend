import { useQuery } from "@tanstack/react-query";
import useCourseHook from "../../../hooks/useCourseHook";
import axios from "axios";

const CourseFilter = () => {
  const { search, setSearch, category, setCategory, resetFilters } =
    useCourseHook();

  const { data: uniqueCategories = [], isLoading } = useQuery({
    queryKey: ["unique-categories"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/categories`
      );
      return res.data.data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
      {/* Search input + button */}
      <div className="col-span-1 md:col-span-2 flex">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search Courses by Title and Instructor name..."
          type="text"
          className="px-4 py-1 text-white border border-gray-400 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 w-full placeholder:capitalize placeholder:italic placeholder:text-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-sm transition cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* Category Dropdown */}
      <div className="col-span-1 md:col-span-1 flex gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border text-white border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
        >
          <option value="" className="text-black">
            Filters By Category
          </option>
          {uniqueCategories.map((unique, index) => (
            <option key={index} value={unique.name} className="text-black">
              {unique.name}
            </option>
          ))}
        </select>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          type="button"
          className="border border-gray-400 bg-transparent text-white font-semibold px-6 py-2 rounded-sm transition cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CourseFilter;
