import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";
import LoadingSpinner from "../../../components/LoadingSpinner";
import axios from "axios";
const CourseDetails = () => {
  const { id } = useParams();
  // Fetch course by ID
  const {
    data: course,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/api/course/${id}`);
      return res.data.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;
  if (!course) return <p className="text-gray-300">Course not found</p>;

  return (
    <div className="container max-w-6xl mx-auto px-6 py-8 text-white">
      {/* Back Link */}
      <NavLink
        to="/courses"
        className="text-blue-400 hover:underline mb-4 inline-block border border-orange-400 px-2 py-1 text-sm font-playfair"
      >
        Back to Courses
      </NavLink>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: 2/3 */}
        <div className="md:w-2/3 space-y-4">
          <span className="inline-block bg-indigo-500 px-3 py-1 rounded-full text-xs font-semibold">
            {course.level}
          </span>
          <h1 className="text-3xl font-bold font-playfair">{course.title}</h1>
          <p className="text-gray-300">
            Instructor: <span className="font-medium">{course.instructor}</span>
          </p>
          <p className="text-gray-400">{course.short_description}</p>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Requirements:</h2>
            <ul className="list-disc list-inside text-gray-300">
              {course.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Lectures:</h2>
            <p>{course.lectures} lectures available</p>
          </div>
        </div>

        {/* Right Section: 1/3 */}
        <div className="md:w-1/3 space-y-4 bg-zinc-900 p-4 rounded-lg shadow-lg">
          <img
            src={course.img}
            alt={course.title}
            className="w-full h-48 object-cover rounded-lg"
          />

          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-blue-400 font-bold mr-2">
                ৳ {course.price.discounted}
              </span>
              <span className="text-gray-400 text-xs line-through">
                ৳ {course.price.original}
              </span>
            </div>

            <p className="text-green-400 text-sm font-semibold">
              {Math.round(
                ((course.price.original - course.price.discounted) /
                  course.price.original) *
                  100
              )}
              % OFF
            </p>
          </div>

          {/* Button-এর উপরে data */}
          <div className="bg-zinc-800 p-2 rounded text-gray-200 text-sm">
            Lectures: {course.lectures} <br />
            Level: {course.level}
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded text-white font-semibold mt-4">
            Enroll Now
          </button>

          {/* Button-এর নিচে data (optional) */}
          <p className="text-gray-200 text-sm mt-2 font-semibold">
            Requirements:
          </p>
          {course.requirements.map((requirement, index) => (
            <p key={index} className="text-xs">
              {requirement}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
