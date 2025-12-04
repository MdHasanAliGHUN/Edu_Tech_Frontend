import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext } from "react";

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  // Fetch All Courses
  const {
    data: courses = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/api/course");
      return res.data.data;
    },
  });

  // Context value
  const coursesInfo = {
    courses,
    isLoading,
    isError,
    error,
    refetch,
  };

  return (
    <CourseContext.Provider value={coursesInfo}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
