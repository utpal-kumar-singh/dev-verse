import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  //@ts-ignore
  const { isAuthenticated, error, user, message } = useSelector(
    (state: any) => state.user
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error("Please enter your email and name");
      return;
    }
    toast.success("Subscription request sent");
    setEmail("");
    setName("");
  };

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 font-sans antialiased relative overflow-hidden pb-16">
      
      {/* 🌌 AI Poster Aesthetic: Cyberpunk Geometric Grid & Plasma Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Glowing Light Orbs behind the typography */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Render your custom Navbar component */}
      <Navbar isAuthenticated={isAuthenticated} />

      <div className="max-w-7xl mx-auto px-6 pt-20 text-center relative z-10">
        
        {/* Main Header Copy with High-End Text Shadows */}
        <div className="mb-8">
          <h1 
            className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-[1.1] max-w-4xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Learn, Build, <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">Grow</span>
          </h1>
          <p className="text-2xl md:text-4xl font-extrabold text-slate-300 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            and utilize your time with DevVerse.
          </p>
        </div>

        {/* Subtitle Description */}
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          DevVerse is an elite student initiative engineered to provide uncompromised, free access to academic document clusters, structured engineering roadmaps, and high-yielding developer resources.
        </p>

        {/* Call to Action Button with Enhanced Glowing Shadow */}
        <div className="flex justify-center items-center mb-28">
          <Link to="/Courses">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 font-bold rounded-xl shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all duration-300 hover:-translate-y-1 text-white tracking-wider text-sm uppercase">
              Get Started &gt;
            </button>
          </Link>
        </div>

        {/* Section: Why DevVerse */}
        <div className="mb-28">
          <h2 className="font-black text-2xl md:text-3xl text-slate-100 mb-12 tracking-tight uppercase border-b border-slate-800/40 pb-4 max-w-xs mx-auto">
            Why DevVerse?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Free */}
            <div className="flex flex-col text-left p-8 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-violet-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] transition-all duration-300 backdrop-blur-md hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent tracking-wide">Free Access</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unlock core documentation blueprints instantly with our absolute zero-cost engine. Stream, view, save, and mirror assets to your storage cluster in real time.
              </p>
            </div>

            {/* Card 2: Speed */}
            <div className="flex flex-col text-left p-8 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-indigo-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(99,102,241,0.1)] transition-all duration-300 backdrop-blur-md hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">High Velocity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Maximize compilation times. Pull offline localized PDF documents directly into your hardware directory for continuous execution without cellular bottlenecks.
              </p>
            </div>

            {/* Card 3: Roadmaps */}
            <div className="flex flex-col text-left p-8 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(6,182,212,0.1)] transition-all duration-300 backdrop-blur-md hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">Curated Roadmaps</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Eliminate architectural doubts. Navigate target career paths with modular milestones designed to match strict enterprise engineering requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Newsletter Form */}
        <div className="max-w-3xl mx-auto p-10 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/40 border border-slate-800/80 shadow-[0_16px_48px_rgba(0,0,0,0.4)] backdrop-blur-md mb-28">
          <h2 className="font-extrabold text-2xl md:text-3xl text-slate-100 mb-2 tracking-tight">
            Subscribe to our newsletter
          </h2>
          <p className="text-slate-400 text-sm md:text-base mb-8">
            We respect your inbox. No spam, promise ✌️
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full sm:w-64 bg-slate-950/90 text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all duration-200 text-sm shadow-inner"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full sm:w-64 bg-slate-950/90 text-slate-100 placeholder-slate-600 px-4 py-3 rounded-xl border border-slate-800 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all duration-200 text-sm shadow-inner"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-950 font-bold rounded-xl text-sm transition-all duration-200 active:scale-95 shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Section: Core Features Grid */}
        <div>
          <h2 className="font-black text-2xl md:text-3xl text-slate-100 mb-10 tracking-tight uppercase">
            Features we provide
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="flex flex-col justify-center items-center p-6 bg-slate-900/30 border border-slate-800/60 rounded-2xl w-44 shadow-md hover:border-violet-500/30 transition-all duration-300 group hover:shadow-[0_8px_20px_rgba(139,92,246,0.05)]">
              <FaDownload className="text-2xl text-violet-400 mb-3 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-200" />
              <p className="font-semibold text-xs tracking-wider text-slate-400 uppercase">Unlimited downloads</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col justify-center items-center p-6 bg-slate-900/30 border border-slate-800/60 rounded-2xl w-44 shadow-md hover:border-indigo-500/30 transition-all duration-300 group hover:shadow-[0_8px_20px_rgba(99,102,241,0.05)]">
              <FaEye className="text-2xl text-indigo-400 mb-3 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-200" />
              <p className="font-semibold text-xs tracking-wider text-slate-400 uppercase">Online access</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col justify-center items-center p-6 bg-slate-900/30 border border-slate-800/60 rounded-2xl w-44 shadow-md hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-[0_8px_20px_rgba(6,182,212,0.05)]">
              <RiRoadMapLine className="text-2xl text-cyan-400 mb-3 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-200" />
              <p className="font-semibold text-xs tracking-wider text-slate-400 uppercase">Personalized roadmaps</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;