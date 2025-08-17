import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (

    <header className=" bg-white fixed top-0 right-0 left-0">
      <nav className="  max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center">

        <a className=" text-3xl font-bold">Gr<span className=" text-orange-500 uppercase">O</span>cify</a>

        <ul className="flex items-center gap-x-15">

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
        <div className=" flex items-center gap-x-5" >
          <div className=" flex items-center border border-slate-500 rounded-full p-1">
            <input type="text" name="text" id="text" placeholder="Search..."  className=" outline-0 text-sm px-3"/>
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
        </div>

      </nav>
    </header >
  )
}

export default Navbar;