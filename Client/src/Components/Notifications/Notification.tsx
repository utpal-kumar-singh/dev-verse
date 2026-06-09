import { useState } from 'react';
import { IoMdNotificationsOutline, IoMdClose } from 'react-icons/io';
import { FaBars } from 'react-icons/fa6';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Notification = () => {
  // 🧭 Local state to open/close your sidebar panel seamlessly
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    // 🎛️ Dynamic structural layout grids tied to your sidebar opening state
    <div 
      className={`admin-container grid h-screen bg-[#070a13] text-slate-100 font-sans antialiased overflow-hidden relative transition-all duration-300 ${
        isSidebarOpen ? "grid-cols-[260px_1fr]" : "grid-cols-[0px_1fr]"
      }`}
    >
      {/* 🌌 Cyber Ambient Background Mesh Layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 📂 Sidebar Panel Container */}
      <div 
        className={`h-full border-r border-slate-800/60 overflow-hidden transition-all duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content Dashboard Frame */}
      <main className="dashboard overflow-y-auto px-8 pb-12 relative z-10 custom-scrollbar">
        
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
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-200"
            > 
              <IoMdNotificationsOutline size={22} className="animate-pulse" />
            </Link>
          </div>
        </div>

        {/* Section Title Header */}
        <div className="mb-10 text-left">
          <h1 className="text-3xl font-black tracking-tight text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            Inbox Alerts
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-light">
            Monitor incoming system course files, updates, and roadmap sync notifications.
          </p>
        </div>

        {/* Premium Center Alert Box Container */}
        <section className="widget-container flex justify-center items-center py-12">
          <div className="flex flex-col justify-center items-center p-10 max-w-xl rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/40 border border-slate-800/80 shadow-[0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-md text-center group hover:border-slate-700/80 transition-colors duration-300">
            
            {/* Animated Ring Notification Bell Accent */}
            <div className="h-16 w-16 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center text-slate-500 mb-6 group-hover:text-violet-400 group-hover:border-violet-500/30 shadow-inner group-hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300">
              <IoMdNotificationsOutline size={36} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold tracking-tight text-slate-200 mb-3">
              No Notifications Over There
            </h2>

            {/* Description Messages */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-2 font-light">
              You will receive real-time dashboard notifications here as soon as new study notes, syllabi, or PDF documents are uploaded.
            </p>
            
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-500/5 px-3 py-1 rounded-full border border-violet-500/10 mt-4 animate-pulse">
              We will get to you soon!
            </p>
            
          </div>
        </section>

      </main>
    </div>
  );
};

export default Notification;