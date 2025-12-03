import { createContext, useState } from "react";
import axios from "axios";
import { set } from "react-hook-form";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  // Register User
  const registerUser = async (userData) => {
    setUserLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/register`,
        userData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      setUserLoading(false);
    }
  };

  // Login User
  const loginUser = async (userData) => {
    setUserLoading(true);
    try {
      const response = await axios.post(
        ` http://localhost:5000/api/users/login`,
        userData
      );
      console.log(response.data);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      setUserLoading(false);
    }
  };

  const userInfo = { user, userLoading, registerUser, loginUser };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
