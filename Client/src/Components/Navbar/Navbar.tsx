import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { logoutUser } from "../../Actions/UserApi";



//@ts-ignore

const Navigation = ({ isAuthenticated }) => {

  const dispatch = useDispatch();

  

  const handleLogout = () => {

    //@ts-ignore

    dispatch(logoutUser());

  };



  return (

    <nav className="w-full bg-[#070a13]/70 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-50 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        

       {/* Brand Logo & Title with Custom Glow Text Shadow */}

<div className="logo flex items-center gap-3 group cursor-pointer">

  <img 

    src="/images/brand_logo.png" 

    alt="" 

    className="w-9 h-9 min-w-[36px] min-h-[36px] object-contain block group-hover:rotate-12 transition-transform duration-300"

    onError={(e) => {

      // Fallback: If the image path ever breaks, this safely hides the broken image icon

      e.currentTarget.style.display = 'none';

    }}

  />

  <p className="font-black text-2xl tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">

    DevVerse<span className="text-cyan-400">✌️</span>

  </p>

</div>



        {/* Empty Navigation Links Container (Ready for Links Later) */}

        <ul className="hidden md:flex items-center gap-8">

          {/* You can drop your menu items here later if needed */}

        </ul>



        {/* Dynamic Auth Actions with Advanced Shadow Control */}

        <div className="flex items-center">

          {isAuthenticated ? (

            <button 

              onClick={handleLogout}

              className="px-5 py-2 rounded-xl text-sm font-bold bg-rose-500/5 hover:bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:shadow-[0_0_25px_rgba(244,63,94,0.35)] transition-all duration-300 active:scale-95 tracking-wide uppercase"

            >

              Logout

            </button>

          ) : (

            <Link to="/login">

              <button 

                className="px-5 py-2 rounded-xl text-sm font-bold bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-300 active:scale-95 tracking-wide uppercase"

              >

                Login

              </button>

            </Link>

          )}

        </div>



      </div>

    </nav>

  );

};



export default Navigation;