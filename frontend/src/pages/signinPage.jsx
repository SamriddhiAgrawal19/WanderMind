import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import  {StoreContext} from "../../context/StoreContext";
import { useContext } from "react";
import axios from "axios";

const SigninPage = () => {
  const { url, setToken } = useContext(StoreContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e)=>{
    setFormData({...formData , [e.target.name] : e.target.value});
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      if(isLogin){
        const res = await axios.post(`${url}/api/users/signin`,{
          email: formData.email,
          password: formData.password
        });
        setToken(res.data.token);
        alert("Login successful ✅");
      }
      else {
        const res = await axios.post(`${url}/api/users/signup`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setToken(res.data.token);
        alert("Signup successful 🎉");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong ❌");
    }
  };

  
  ;

  return (
    <>
      <Header />
      <div
        className="min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-blue-100 via-white to-purple-200 
        px-4 relative overflow-hidden"
      >
        {/* Gradient Orbs */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-400/30 rounded-full blur-3xl"></div>

        {/* Card */}
        <div className="relative w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 z-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
          </h2>

          {/* Form */}
          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-md hover:opacity-90 transition-all"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SigninPage;