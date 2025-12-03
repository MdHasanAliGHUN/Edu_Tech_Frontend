import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
      toast.success("রেজিস্ট্রেশন সফল হয়েছে!");
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে!"
      );
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

      toast.success(" লগইন সফল হয়েছে!");
      console.log(response.data);
      setUser(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || " লগইন ব্যর্থ হয়েছে!");
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
