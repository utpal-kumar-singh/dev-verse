import { useEffect, useState } from 'react';
import { FaChartBar } from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';
import { HiOutlineSparkles } from "react-icons/hi2";
import { IoMdContact, IoMdNotificationsOutline, IoMdClose } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [showModal, setShowmodal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1100);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
    // Auto-close modal if user resizes back to desktop
    if (window.innerWidth >= 1100) setShowmodal(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      {/* 🍔 Mobile Hamburger Button (Floating) */}
      {phoneActive && !showModal && (
        <button 
          id='hamburger' 
          onClick={() => setShowmodal(true)}
          className="fixed top-5 left-4 z-50 p-2.5 bg-slate-900/80 border border-slate-800/80 rounded-xl text-slate-300 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:text-violet-400 transition-colors"
        >
          <HiMenuAlt4 size={24} />
        </button>
      )}

      {/* 🌑 Mobile Overlay Screen Drop */}
      {phoneActive && showModal && (
        <div 
          className="fixed inset-0 bg-[#070a13]/80 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setShowmodal(false)}
        ></div>
      )}

      <aside 
        className={`flex flex-col bg-[#0b0f19] border-r border-slate-800/60 overflow-y-auto custom-scrollbar transition-all duration-300 z-50
          ${phoneActive ? "fixed top-0 bottom-0 shadow-[4px_0_32px_rgba(0,0,0,0.6)]" : "w-full h-full relative"}
          ${phoneActive && !showModal ? "-translate-x-full" : "translate-x-0"}
        `}
        style={phoneActive ? { width: "18rem" } : {}}
      >
        {/* Header & Logo Section */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-slate-800/40">
          <div className="flex items-center gap-3">
            <img src="" alt="" className="" />
            <h2 className="font-black text-xl tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              DevVerse<span className="text-cyan-400">✌️</span>
            </h2>
          </div>
          
          {/* Mobile Close Button */}
          {phoneActive && (
            <button 
              onClick={() => setShowmodal(false)}
              className="p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-rose-400 rounded-lg transition-colors"
            >
              <IoMdClose size={20} />
            </button>
          )}
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 py-6 flex flex-col gap-8">
          <DivOne location={location} />
          <DivTwo location={location} />
        </div>
        
        {/* Footer Identifier */}
        <div className="p-6 border-t border-slate-800/40 mt-auto">
          <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold text-center">
            Student Node v1.0
          </p>
        </div>
      </aside>
    </>
  );
}

//@ts-ignore
const DivOne = ({ location }) => (
  <div className="px-4">
    <h5 className="px-4 text-[11px] font-black uppercase tracking-widest text-slate-500 mb-3">Dashboard</h5>
    <ul className="flex flex-col gap-1.5 list-none">
      <Li url="/hero" text="Home" Icon={MdHome} location={location} />
    </ul>
  </div>
);

//@ts-ignore
const DivTwo = ({ location }) => (
  <div className="px-4">
    <h5 className="px-4 text-[11px] font-black uppercase tracking-widest text-slate-500 mb-3">Workspace</h5>
    <ul className="flex flex-col gap-1.5 list-none">
      <Li url="/Courses" text="Courses" Icon={FaChartBar} location={location} />
      <Li url="/profile" text="Profile" Icon={RiAccountCircleFill} location={location} />
      <Li url="/notifications" text="Notifications" Icon={IoMdNotificationsOutline} location={location} />
      <Li url="/roadmaps" text="Roadmaps" Icon={HiOutlineSparkles} location={location} />
      <Li url="/contact" text="Contact Us" Icon={IoMdContact} location={location} />
    </ul>
  </div>
);

//@ts-ignore
const Li = ({ url, text, location, Icon }) => {
  // Checks if the current URL matches the link to apply the glowing active state
  const isActive = location.pathname.includes(url);

  return (
    <li>
      <Link 
        to={url}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 active:scale-95 group
          ${isActive 
            ? "bg-violet-600/10 text-violet-400 border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.05)]" 
            : "text-slate-400 hover:bg-slate-900 hover:text-slate-100 border border-transparent"}
        `}
      >
        <Icon 
          size={18} 
          className={isActive 
            ? "text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" 
            : "text-slate-500 group-hover:text-slate-300 transition-colors"
          } 
        />
        <span className="tracking-wide text-sm">{text}</span>
      </Link>
    </li>
  );
};

export default Sidebar;