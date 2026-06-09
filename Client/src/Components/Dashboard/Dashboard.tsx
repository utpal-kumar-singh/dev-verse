import { RootState } from "@reduxjs/toolkit/dist/query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSearchengin, FaBars } from "react-icons/fa6"; // Imported FaBars for the toggle menu icon
import { IoMdNotificationsOutline, IoMdClose } from "react-icons/io"; // Imported IoMdClose to close it
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../Actions/CourseApi";
import { Course } from "../../types/user";
import Cards from "../Card/Cards";
import Loader from "../Loader/Loader";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [category] = useState("");
  
  // 🧭 State to manage opening/closing the sidebar menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  //@ts-ignore
  const { user } = useSelector((state: RootState) => state.user);
  //@ts-ignore
  const { course, loading, error, message } = useSelector((state: RootState) => state.course);

  const truncate = (str: string) => {
    if (!str) return "";
    if (str.length > 60) {
      return str.slice(0, 45) + "...";
    }
    return str;
  };

  useEffect(() => {
    //@ts-ignore
    dispatch(getAllCourses(category, keyword));
  }, [category, keyword, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [error, message, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    // 🎛️ Dynamically adjust the grid system columns based on isSidebarOpen state!
    <div 
      className={`admin-container grid h-screen bg-[#070a13] text-slate-100 font-sans antialiased overflow-hidden relative transition-all duration-300 ${
        isSidebarOpen ? "grid-cols-[260px_1fr]" : "grid-cols-[0px_1fr]"
      }`}
    >
      
      {/* 🌌 Atmospheric Backdrop Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* 📂 Sidebar Panel Container with slide animation states */}
      <div 
        className={`h-full border-r border-slate-800/60 overflow-hidden transition-all duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Pass custom internal properties if your sidebar needs a close switch on mobile */}
        <Sidebar />
      </div>

      {/* Main Workspace Frame */}
      <main className="dashboard overflow-y-auto px-8 pb-12 relative z-10 custom-scrollbar">
        
        {/* Top Control Bar Area */}
        <div className="bar h-20 flex items-center justify-between w-full border-b border-slate-800/40 mb-8 gap-4">
          
          {/* Toggle Menu Trigger + Search Engine */}
          <div className="flex items-center w-full max-w-lg gap-4">
            
            {/* 🍔 Interactive Floating Menu Toggle Button */}
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 text-slate-400 hover:text-violet-400 shadow-md transition-all duration-200 active:scale-95"
              title={isSidebarOpen ? "Collapse Menu" : "Expand Menu"}
            >
              {isSidebarOpen ? <IoMdClose size={20} /> : <FaBars size={18} />}
            </button>

            {/* Neon Search Module */}
            <div className="flex items-center w-full relative group">
              <input         
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                type="text"
                id="search"
                placeholder="Search any course, roadmap, or file..."
                className="w-full bg-slate-950/60 text-slate-100 placeholder-slate-600 pl-4 pr-12 py-2.5 rounded-xl border border-slate-800/80 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/20 outline-none transition-all duration-200 text-sm shadow-inner"
              />
              <label htmlFor="search" className="absolute right-4 text-slate-500 group-focus-within:text-violet-400 transition-colors duration-200 cursor-pointer">
                <FaSearchengin size={18} />
              </label>
            </div>
          </div>

          {/* Interactive Notifications Bell */}
          <div className="notifi flex items-center pl-4">
            <Link 
              to="/notifications" 
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200 shadow-md transition-all duration-200 hover:scale-105"
            > 
              <IoMdNotificationsOutline size={22} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
            </Link>
          </div>
        </div>

        {/* Greetings Segment */}
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            Welcome back, <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{user?.name || "Developer"}</span> ✨
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-light">
            Here is your personalized roadmap trajectory and catalog view.
          </p>
        </div>

        {/* Course Cards Rendering Section */}
        <section className="widget-container">
          {course && course.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.map((item: Course) => (
                <div 
                  key={item?._id}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <Cards
                    title={item.title}
                    description={truncate(item?.description)}
                    id={item?._id}
                    file={typeof item.file === 'string' ? item.file : item.file.url}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-20 border border-dashed border-slate-800/60 rounded-2xl bg-slate-900/10 backdrop-blur-sm mt-4">
              <span className="text-4xl mb-4">🔮</span>
              <p className="text-slate-400 font-medium text-sm">No courses discovered matching your target criteria.</p>
              <p className="text-slate-600 text-xs mt-1">Try updating your query or network metrics.</p>
            </div>
          )}
        </section>
        
      </main>
    </div>
  );
};

export default Dashboard;