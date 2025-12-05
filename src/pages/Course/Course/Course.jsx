import SectionTitle from "../../../components/SectionTitle";
import CourseCards from "../CourseCards/CourseCards";
import CourseFilter from "../CourseFilter/CourseFilter";

const Course = () => {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-4">
      <SectionTitle
        title="Explore Our Course Library"
        subTitle="Learn modern web development skills from beginner to advanced — designed to match real-world industry needs."
      />
      <CourseFilter/>
      <CourseCards/>
    </div>
  );
};

export default Course;
