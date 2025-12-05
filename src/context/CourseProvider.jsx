import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Fetch All Courses
  const {
    data: courses = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["courses", search, category],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/course?title=${search}&instructor=${search}&category=${category}`
      );
      return res.data.data;
    },
  });

  const resetFilters = () => {
    setSearch("");
    setCategory("");
  };

  // Context value
  const coursesInfo = {
    courses,
    isLoading,
    isError,
    error,
    search,
    category,
    setSearch,
    setCategory,
    resetFilters,
    refetch,
  };

  return (
    <CourseContext.Provider value={coursesInfo}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
