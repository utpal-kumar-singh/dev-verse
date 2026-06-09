import { RootState } from "@reduxjs/toolkit/dist/query";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosInformationCircleOutline, IoMdNotificationsOutline, IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../Actions/UserApi";
import SavedItems from "../SavedCard/SavedItems";
import Sidebar from "../Sidebar/Sidebar";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

// TypeScript Interface for your mapped items
interface FavouriteCourse {
  course: string;
  poster: string;
  id: string;
}

const Profile = () => {
  const dispatch = useDispatch();

  // 🧭 Sidebar Toggle State
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  //@ts-ignore
  const { user, loading } = useSelector((state: RootState) => state.user);

  // 📅 Safe Date Parsing
  let formattedDate = "Recently";
  if (user?.createdAt) {
    const date = new Date(user.createdAt);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    formattedDate = `${day} ${month} ${year}`;
  }

  useEffect(() => {
    //@ts-ignore
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    // 🎛️ Dynamic Grid System mirroring the Dashboard state
    <div 
      className={`admin-container grid h-screen bg-[#070a13] text-slate-100 font-sans antialiased overflow-hidden relative transition-all duration-300 ${
        isSidebarOpen ? "grid-cols-[260px_1fr]" : "grid-cols-[0px_1fr]"
      }`}
    >
      
      {/* 🌌 Cyber Ambient Background Mesh Layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 📂 Sidebar Panel Container */}
      <div 
        className={`h-full border-r border-slate-800/60 overflow-hidden transition-all duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content Dashboard Frame */}
      <main className="dashboard overflow-y-auto px-4 sm:px-8 pb-12 relative z-10 custom-scrollbar">
        
        {/* Top Header Control Row */}
        <div className="bar h-20 flex items-center justify-between w-full border-b border-slate-800/40 mb-8">
          
          {/* Menu Slider Switch Trigger */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 text-slate-400 hover:text-violet-400 shadow-md transition-all duration-200 active:scale-95"
            title={isSidebarOpen ? "Collapse Menu" : "Expand Menu"}
          >
            {isSidebarOpen ? <IoMdClose size={20} /> : <FaBars size={18} />}
          </button>

          {/* Nav Notifications Indicator Quicklink */}
          <div className="notifi flex items-center pl-4">
            <Link 
              to="/notifications" 
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200 shadow-md transition-all duration-200 hover:scale-105"
            > 
              <IoMdNotificationsOutline size={22} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
            </Link>
          </div>
        </div>

        {/* Workspace Container */}
        <div className="max-w-5xl mx-auto">
          
          {/* Header Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Developer Profile
            </h1>
            <p className="text-sm text-slate-400 mt-1 font-light">
              Manage your personal identity, bio, and saved network resources.
            </p>
          </div>

          {/* 🪪 ID Card Section */}
          <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-[0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-md mb-12 relative overflow-hidden">
            
            {/* Subtle card glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Profile Avatar Frame */}
            <div className="shrink-0 flex justify-center md:justify-start relative z-10">
              <div className="relative">
                <img 
                  className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-slate-900 shadow-[0_0_20px_rgba(139,92,246,0.3)] ring-1 ring-violet-500/50"
                  src={user?.file?.url || "/images/default_avatar.png"}
                  alt="Profile Avatar"
                />
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              </div>
            </div>

            {/* Profile Content Core */}
            <div className="flex flex-col justify-center gap-4 w-full relative z-10 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {user?.name || "Anonymous User"}
                </h3>
                <p className="text-sm font-medium text-slate-400 mt-1">
                  {user?.email || "No email provided"}
                </p>
              </div>
              
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60 inline-block w-full">
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {user?.bio || "No bio updated yet. Add a short description about your developer journey."}
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-2">
                <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-violet-600 hover:bg-violet-500 rounded-lg shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-200 active:scale-95">
                  <MdEdit size={16} /> Edit Profile
                </button>
                
                <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700/50 rounded-lg transition-all duration-200 active:scale-95">
                  <CgProfile size={16} /> Change Avatar
                </button>
                
                <div className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-500 bg-slate-900/40 border border-slate-800/50 rounded-lg ml-auto">
                  <IoIosInformationCircleOutline size={16} className="text-violet-400" />
                  Joined {formattedDate}
                </div>
              </div>
            </div>
          </div>

          {/* 📚 Saved Courses Separator */}
          <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-100 uppercase">
              Saved Assets Library
            </h2>
            <div className="ml-4 flex-grow h-px bg-gradient-to-r from-slate-800 to-transparent"></div>
          </div>

          {/* Saved Courses Grid Setup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {!user?.FavouriteCourse || user.FavouriteCourse.length === 0 ? (
              <div className="col-span-full w-full flex flex-col items-center justify-center py-16 border border-dashed border-slate-800/60 rounded-2xl bg-slate-900/10 backdrop-blur-sm">
                <span className="text-4xl mb-4 opacity-50">📂</span>
                <p className="text-slate-400 font-medium text-sm">Your library is currently empty.</p>
                <p className="text-slate-600 text-xs mt-1">Bookmark courses and roadmaps to access them instantly here.</p>
              </div>
            ) : (
              user.FavouriteCourse.map((item: FavouriteCourse) => (
                <div key={item.id} className="transition-transform duration-300 hover:-translate-y-1">
                  <SavedItems item={item} />
                </div>
              ))
            )}
          </div>
          
        </div>
      </main>

      {/* <EditModal isOpen={isModalOpen} onClose={closeModal}/> */}
    </div>
  );
};

export default Profile;