import { RootState } from "@reduxjs/toolkit/dist/query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../Actions/UserApi";
import Loader from "../Loader/Loader";

const Register = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [file, setImage] = useState<File | null>(null);
  
  const navigation = useNavigate();
  const dispatch = useDispatch();
  
  //@ts-ignore
  const { loading, error } = useSelector((state: RootState) => state.user);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);

      reader.onloadend = () => {
        setImagePrev(reader.result as string);
        setImage(selectedFile);
      };
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm: FormData = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    if (file) {
      myForm.append("file", file);
    }
    
    //@ts-ignore
    await dispatch(registerUser(myForm));
    navigation("/addbio");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 font-sans flex items-center justify-center relative overflow-hidden p-4 sm:p-6">
      
      {/* 🌌 Atmospheric Vector Ambient Mesh Backdrops */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 🎛️ Primary Split Layout Core Frame */}
      <div className="w-full max-w-5xl grid lg:grid-cols-12 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-[0_24px_64px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-md relative z-10">
        
        {/* 🎨 COLUMN 1 (Left Side): Registration Poster Graphic */}
        <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-br from-slate-950 via-[#0d1324] to-slate-950 p-10 flex-col justify-between relative overflow-hidden border-r border-slate-800/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full blur-[60px] pointer-events-none animate-pulse"></div>
          
          <div className="flex items-center gap-3 relative z-10 shrink-0">
            <div className="h-12 w-12 flex items-center justify-center overflow-hidden shrink-0">
              <img src="" alt="" className="" />
            </div>
            <span className="font-black text-2xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              DevVerse
            </span>
          </div>

          <div className="my-auto space-y-4 relative z-10 pt-8">
            <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-transparent border border-cyan-500/20 text-xl shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              🚀
            </div>
            <h2 className="text-3xl font-black tracking-tight leading-tight text-slate-100">
              Initialize Your <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Developer Profile
              </span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Create an account to track your roadmaps, save premium PDF documents, and accelerate your final-year engineering goals.
            </p>
          </div>

          <p className="text-[11px] text-slate-500 tracking-wider font-semibold relative z-10 uppercase">
            Secure Node Creation // Encrypted
          </p>
        </div>

        {/* 🔐 COLUMN 2 (Right Side): High-End Registration Form */}
        <div className="col-span-12 lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-slate-900/10">
          <div className="w-full max-w-md mx-auto space-y-6">
            
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                Create an Account
              </h1>
              <p className="text-sm text-slate-400 mt-1 font-light">
                Fill out the details below to generate your unique access node.
              </p>
            </div>

            <form onSubmit={submitHandler} className="space-y-4">
              
              {/* Interactive Native Tailwind Avatar Upload */}
              <div className="flex flex-col items-center justify-center pb-2">
                <div className="relative group cursor-pointer w-20 h-20 rounded-full overflow-hidden border-2 border-slate-700 hover:border-violet-500 shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300 bg-slate-800 flex items-center justify-center">
                  {imagePrev ? (
                    <img src={imagePrev} alt="Avatar Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-slate-400 font-medium tracking-wide">Upload</span>
                  )}
                  {/* Invisible file input covering the entire circle */}
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-2 font-medium">Profile Picture</p>
              </div>

              {/* Field Block: Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-slate-950/80 text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all duration-200 text-sm shadow-inner"
                />
              </div>

              {/* Field Block: Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                  className="w-full bg-slate-950/80 text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all duration-200 text-sm shadow-inner"
                />
              </div>

              {/* Field Block: Password */}
              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950/80 text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all duration-200 text-sm shadow-inner"
                />
              </div>

              {/* Core Execution Call To Action Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-[0_4px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.45)] tracking-wide uppercase"
                >
                  Create Account
                </button>
              </div>

              {/* Alternative Auth Navigation Flow Footer */}
              <p className="text-sm font-light text-slate-400 text-center pt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-violet-400 hover:text-violet-300 hover:underline transition-colors duration-200 ml-1"
                >
                  Sign in
                </Link>
              </p>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;