import Link from "next/link";
import { useState } from "react";
import {BiHomeAlt} from 'react-icons/bi'
import {MdFilterBAndW} from 'react-icons/md'
import {GiGamepad} from 'react-icons/gi'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'



const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex sidebar zindex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-elem  p-5  pt-8 relative rounded-l-[30px] duration-300`}
      >
        <div
          src="./assets/control.png"
          className={`absolute cursor-pointer -right-2 top-10 w-7 border-dark-purple
           text-white rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        ><BsFillArrowLeftCircleFill size={20}/></div>
        <div className="flex gap-x-4 items-center">
          <div
            src="./assets/logo.png"
            className={`cursor-pointer text-white duration-500 ${
              open && "rotate-[360deg]"
            }`}
          ><MdFilterBAndW size={40}/></div>
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Casino.band
          </h1>
        </div>
        <ul className="pt-6">
            <Link href='/'>
              <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
                <BiHomeAlt size={30}/>
                <span className={`${!open && "hidden"} duration-200`}>
                  Home
                </span>
              </li>
            </Link>
            <Link href='/about'>
              <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
                <GiGamepad size={30}/>
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  Games
                </span>
              </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
