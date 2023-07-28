"use client";
import Image from "next/image";
import logoComoEnCasa from "../assets/logoComoEnCasa.png";
import { BiSearch, BiUser, BiCart } from "react-icons/bi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nabvar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-6 md:hidden">
        <HiMenuAlt3
          onClick={handleToggle}
          className={`cursor-pointer text-3xl md:hidden relative ${
            toggle ? "invisible" : ""
          }`}
        />
        {toggle && (
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            className="fixed left-0 top-56 bg-white h-screen text-black w-80"
          >
            <nav className="mt-0">
              <ul className="flex left-0 flex-col mt-[40%] ml-[20%]  md:hidden">
                <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3 text-amber-800">
                  Home
                </li>
                <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
                  Shop
                </li>
                <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
                  Features
                </li>
                <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
                  Blog
                </li>
                <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
                  About Us
                </li>
                <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
                  Contact Us
                </li>
              </ul>
            </nav>
            <HiX
              className="absolute right-4 text-3xl top-8 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </motion.div>
        )}
        <Image
          className="m-0 h-36 md:hidden"
          src={logoComoEnCasa}
          alt="Imagen Logo"
          width={160}
          height={75}
        />
        <div className="flex justify-center items-center md:hidden">
          <BiSearch
            className="hover:bg-slate-300 cursor-pointer"
            size="24px"
            style={{ margin: "9px" }}
          />
          <BiUser
            className="hover:bg-slate-300 cursor-pointer"
            size="24px"
            style={{ margin: "9px" }}
          />
          <BiCart
            className="hover:bg-slate-300 cursor-pointer"
            size="24px"
            style={{ margin: "9px" }}
          />
        </div>
      </div>
      <div className=" justify-between items-center pt-6 pb-6 hidden md:flex">
        <Image
          className="m-0 h-36 ml-5"
          src={logoComoEnCasa}
          alt="Imagen Logo"
          width={130}
          height={75}
        />
        <nav className="mt-0">
          <ul className=" hidden md:inline-flex">
            <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3 text-amber-800">
              Home
            </li>
            <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
              Shop
            </li>
            <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
              Features
            </li>
            <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
              Blog
            </li>
            <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
              About Us
            </li>
            <li className="hover:bg-slate-300 cursor-pointer text-lg py-4 px-3">
              Contact Us
            </li>
          </ul>
        </nav>
        <div className=" justify-center items-center hidden md:flex">
          <BiSearch
            className="hover:bg-slate-300 cursor-pointer"
            size="24px"
            style={{ margin: "9px" }}
          />
          <BiUser
            className="hover:bg-slate-300 cursor-pointer"
            size="24px"
            style={{ margin: "9px" }}
          />
          <BiCart
            className="hover:bg-slate-300 cursor-pointer"
            size="24px"
            style={{ margin: "9px" }}
          />
        </div>
      </div>
    </div>
  );
}
