import React from "react";
import { useContext } from "react";
import { CourseContext } from "../context/CourseProvider";

const useCourseHook = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseHook must be used within a CourseProvider");
  }
  return context;
};

export default useCourseHook;
