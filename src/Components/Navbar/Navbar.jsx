import { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";


function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect( () => {
    const handleScroll = () => {
      if(window.scrollY > 80){
        setScroll(true);
      }
      else{
        setScroll(false)
      }
    }

    window.addEventListener( 'scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  },[])

  const toggleMenu =  () => {
    setMobileMenu(!mobileMenu);
  }
  return (

    <header className=  {`bg-white fixed top-0 right-0 left-0 z-10 ${scroll? " shadow-2xl" : "" }`}>
      <nav className="  max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">

        <a className=" text-3xl font-bold">Gr<span className=" text-orange-500 uppercase">O</span>cify</a>

        <ul className="md:flex items-center gap-x-15 hidden">

          {/* Nav Menu */}
          <li>
            <a href="#" className=" tracking-wider font-semibold text-orange-500">Home</a>
          </li>
          <li>
            <a href="#" className=" tracking-wider font-semibold text-zinc-800 hover:text-orange-500">About</a>
          </li>
          <li>
            <a href="#" className=" tracking-wider font-semibold text-zinc-800 hover:text-orange-500">Process</a>
          </li>
          <li>
            <a href="#" className=" tracking-wider font-semibold text-zinc-800 hover:text-orange-500">Contact Us</a>
          </li>

        </ul>

        {/* Nav Actions */}
        <div className=" flex items-center gap-x-5 ml-25" >
          <div className=" md:flex items-center border border-slate-500 rounded-full p-1 hidden">
            <input type="text" name="text" id="text" placeholder="Search..." className=" outline-0 text-sm px-3" />
            <button className=" bg-gradient-to-b from-orange-400 to-orange-600 text-white text-2xl hover:cursor-pointer flex justify-center items-center w-10 h-10 rounded-full">
              <IoSearch />
            </button>
          </div>
          <a className=" text-3xl text-zinc-800 hover:cursor-pointer hover:text-orange-500">
            <GoHeartFill />
          </a>
          <a className=" text-3xl text-zinc-800 hover:cursor-pointer hover:text-orange-500">
            <HiShoppingBag />
          </a>

          <a onClick={toggleMenu} href="#" className=" text-zinc-800 text-3xl md:hidden">
          {
            mobileMenu? <TbMenu3 /> : <TbMenu2 />
          }
            
          </a>
        </div>

        {/* Hamburger Menu */}
         <ul className={`flex flex-col mt-3 gap-y-15 bg-orange-500/15 shadow-xl backdrop-blur-lg p-10 items-center gap-x-15 mg:hidden absolute top-30 -left-full transform -translate-x-1/2 rounded-3xl transition-all duration-500 ${mobileMenu? "left-1/2": ""}`}>
          {/* Nav Mobile Menu */}
          <li>
            <a href="#" className=" tracking-wider font-semibold text-white">Home</a>
          </li>
          <li>
            <a href="#" className=" tracking-wider font-semibold text-zinc-800 hover:text-white">About</a>
          </li>
          <li>
            <a href="#" className=" tracking-wider font-semibold text-zinc-800 hover:text-white">Process</a>
          </li>
          <li>
            <a href="#" className=" tracking-wider font-semibold text-zinc-800 hover:text-white">Contact Us</a>
          </li>
          <li className="flex items-center border border-slate-500 rounded-full p-1 md:hidden">
            <input type="text" name="text" id="text" placeholder="Search..." className=" outline-0 text-sm px-3" />
            <button className=" bg-gradient-to-b from-orange-400 to-orange-600 text-white text-2xl hover:cursor-pointer flex justify-center items-center w-10 h-10 rounded-full">
              <IoSearch />
            </button>
          </li>
        </ul>
        
  
      </nav>
    </header >
  )
}

export default Navbar;