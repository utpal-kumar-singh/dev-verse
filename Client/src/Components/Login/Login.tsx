import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { googleLoginUser, loginUser } from "../../Actions/UserApi";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import Loader from "../Loader/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //@ts-ignore
  const { isAuthenticated, loading, error, user, message } = useSelector(
    (state: any) => state.user
  );

  const handleGoogleLogin = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential;
    //@ts-ignore
    await dispatch(googleLoginUser(idToken));
    
    if (isAuthenticated) {
      navigate("/Courses");
      toast.success(message || "Logged in successfully!");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }
    //@ts-ignore
    dispatch(loginUser(email, password));
    
    if (isAuthenticated) {
      navigate("/Courses");
      toast.success(message || "Welcome back!");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Courses");
    }
    if (user) {
      toast.success(message);
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, isAuthenticated, error, user, navigate, message]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 font-sans flex items-center justify-center relative overflow-hidden p-4 sm:p-6">
      
      {/* 🌌 Background Glows & Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 🎛️ Main Split Layout Card */}
      <div className="w-full max-w-5xl grid lg:grid-cols-12 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-[0_24px_64px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-md relative z-10">
        
        {/* 🎨 Left Side: Student/Project Motivation Banner */}
        <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-slate-950 via-[#0d1324] to-slate-950 p-10 flex-col justify-between relative overflow-hidden border-r border-slate-800/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-full blur-[60px] pointer-events-none animate-pulse"></div>
          
          {/* Fixed Logo Box to Prevent Distortion */}
          {/* Fixed Logo Box: Directly locks dimensions on the image element itself */}
<div className="flex items-center gap-3 relative z-10">
  <img 
    src="/images/brand_logo.png" 
    alt="" 
    className=""
  />
  <span className="font-black text-2xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
    DevVerse
  </span>
</div>

          <div className="my-auto space-y-4 relative z-10 pt-8">
            <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-violet-500/10 to-transparent border border-violet-500/20 text-xl shadow-[0_0_20px_rgba(139,92,246,0.1)]">
              📚
            </div>
            <h2 className="text-3xl font-black tracking-tight leading-tight text-slate-100">
              Welcome to <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                DevVerse
              </span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Get free access to study materials, courses, and structured roadmaps designed to help you study and build projects faster.
            </p>
          </div>

          <p className="text-[11px] text-slate-500 tracking-wider font-semibold relative z-10 uppercase">
            Student Learning Platform
          </p>
        </div>

        {/* 🔐 Right Side: Simple Student Login Form */}
        <div className="col-span-12 lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-slate-900/10">
          <div className="w-full max-w-md mx-auto space-y-6">
            
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                Login to your account
              </h1>
              <p className="text-sm text-slate-400 mt-1 font-light">
                Enter your credentials below to access your dashboard.
              </p>
            </div>

            <form onSubmit={submitHandler} className="space-y-5">
              
              {/* Simple Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email"
                  className="w-full bg-slate-950/80 text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all duration-200 text-sm shadow-inner"
                />
              </div>

              {/* Simple Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-slate-950/80 text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all duration-200 text-sm shadow-inner"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 rounded accent-violet-500 bg-slate-950 border-slate-800 focus:ring-0 outline-none cursor-pointer"
                  />
                  <label htmlFor="remember" className="text-xs text-slate-400 cursor-pointer select-none">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-[0_4px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.45)] tracking-wide uppercase"
                >
                  Login
                </button>

                <div className="relative flex items-center justify-center py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800/60"></div>
                  </div>
                  <span className="relative px-3 text-[10px] uppercase font-bold tracking-widest bg-[#090d19] text-slate-500">
                    OR SIGN IN WITH
                  </span>
                </div>

                {/* Google Login Component */}
                <div className="w-full flex justify-center custom-google-btn drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.01]">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => handleGoogleLogin(credentialResponse)}
                    onError={() => {
                      toast.error("Google Login Failed");
                    }}
                    theme="filled_black"
                    shape="circle"
                    width="100%"
                  />
                </div>
              </div>

              <p className="text-sm font-light text-slate-400 text-center pt-4">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-violet-400 hover:text-violet-300 hover:underline transition-colors duration-200 ml-1"
                >
                  Sign up
                </Link>
              </p>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;