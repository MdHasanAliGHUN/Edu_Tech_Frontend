import CourseCard from "../CourseCard/CourseCard";
import useCourseHook from "../../../hooks/useCourseHook";
import LoadingSpinner from "../../../components/LoadingSpinner";

const CourseCards = () => {
  const { courses, isLoading } = useCourseHook();
  console.log(courses);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {courses?.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseCards;
