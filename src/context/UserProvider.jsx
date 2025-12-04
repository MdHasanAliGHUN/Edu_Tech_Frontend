import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
export const UserContext = createContext(null);
const cookies = new Cookies();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  // Check user on app load
  useEffect(() => {
    const loadUser = async () => {
      const token = cookies.get("token");
      if (token) {
        const decoded = await jwtDecode(token);
        setUser(decoded);
      }
    };
    loadUser();
  }, []);

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
      // Token extract করা
      const token = response.data?.data?.access?.token;
      if (token) {
        cookies.set("token", token, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
          secure: false,
        });
      }

      toast.success(" লগইন সফল হয়েছে!");
      setUser(response.data.data);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || " লগইন ব্যর্থ হয়েছে!");
    } finally {
      setUserLoading(false);
    }
  };

  //Logout User
  const logoutUser = () => {
    cookies.remove("token", { path: "/" });
    setUser(null);
    toast.success("সফলভাবে লগআউট হয়েছে!");
  }
  const userInfo = { user, userLoading, registerUser, loginUser , logoutUser};
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
