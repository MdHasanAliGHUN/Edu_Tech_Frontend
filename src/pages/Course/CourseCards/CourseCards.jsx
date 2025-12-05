import CourseCard from "../CourseCard/CourseCard";
import useCourseHook from "../../../hooks/useCourseHook";
import LoadingSpinner from "../../../components/LoadingSpinner";

const CourseCards = () => {
  const { courses, isLoading } = useCourseHook();
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {courses.length > 0 ? (
        courses?.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))
      ) : (
        <p className="text-center text-gray-300 col-span-full">
          No courses found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default CourseCards;
