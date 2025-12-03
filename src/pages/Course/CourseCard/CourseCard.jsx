import { NavLink } from "react-router";

const CourseCard = ({ course }) => {
  return (
    <div className="border border-gray-600 rounded-xl shadow-md p-4 hover:shadow-lg transition bg-zinc-900">
      <div className="relative">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-44 object-cover rounded-lg "
        />
        <span className="absolute top-5 right-5 text-xs bg-indigo-300 text-black px-2 py-1 rounded-full">
          {course.level}
        </span>
      </div>
      <h2 className="text-lg text-gray-100 font-bold mt-3">{course.title}</h2>
      <p className="text-sm text-gray-300 mt-1 ">
        Instructor: <span className="font-medium">{course.instructor}</span>
      </p>
      <p className="text-gray-300 mt-2">{course.short_description}</p>
      <div className="flex justify-between items-center mt-4">
        {/* Price: original & discounted */}
        <div>
          <span className="font-bold text-blue-600">
            ৳ {course.price.discounted}
          </span>
          <span className="text-gray-400 text-sm line-through ml-2">
            ৳ {course.price.original}
          </span>
        </div>
      </div>
      <NavLink to={`/courses-details/${course.id}`} className="block w-full bg-blue-600 text-center text-white px-3 py-1 rounded-sm hover:bg-blue-700 transition my-2">
        View Details
      </NavLink>
    </div>
  );
};

export default CourseCard;
