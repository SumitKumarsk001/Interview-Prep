import { useContext,useEffect } from "react";

import { login,register,logout,getMe } from "../services/auth.api";
import { AuthContext } from "../auth.context";

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;
 
 const handleLogin=async({email,password})=>{
  setLoading(true);
  try {
    const data=await login({email,password});
    setUser(data.user);
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }finally{
   setLoading(false);
  }
 }

 const handleRegister=async({username,email,password})=>{
  setLoading(true);
  try {
    const data=await register({username,email,password});
    setUser(data.user);
    return true;
  } catch (error) {
    console.error("Registration failed:", error);
    return false;
  }
  finally{
   setLoading(false);
  }
 }

 const handleLogout=async()=>{
  setLoading(true);
  try {
     const data=await logout();
  setUser(null);
  } catch (error) {
    
  }finally{
  setLoading(false);
  }
 }

 
  useEffect(()=>{
    const getAndSetUser=async()=>{
      try {
        const data=await getMe();
        setUser(data.user);
      } catch (error) {
        setUser(null);
      }finally{
        setLoading(false);
      }
    };
    getAndSetUser();
  },[]);
  

 return { user, setUser, loading, setLoading, handleLogin, handleRegister, handleLogout };

}