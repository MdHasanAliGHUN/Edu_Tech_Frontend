import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const useUserHook = () => {
  const context = useContext(UserContext);
  if (!context) {
    return new Error("useUserHook must be used within UserProvider");
  }
  return context;
};

export default useUserHook;
