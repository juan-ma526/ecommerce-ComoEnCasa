import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaRegCopyright,
} from "react-icons/fa";
import logoComoEnCasa from "../assets/logoComoEnCasa.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col mt-11 bg-marron-600 h-auto">
      <div className="flex justify-between items-center pl-4 pr-4 border-b-[1px] border-white">
        <div className="flex gap-5">
          <h3 className="text-white text-lg">Follow Us:</h3>
          <div className="flex gap-3">
            <BsInstagram
              className="bg-white hover:bg-slate-400 cursor-pointer"
              size={25}
            />
            <BsFacebook
              className="bg-white hover:bg-slate-400 cursor-pointer"
              size={25}
            />
            <BsTwitter
              className="bg-white hover:bg-slate-400 cursor-pointer"
              size={25}
            />
            <BsYoutube
              className="bg-white hover:bg-slate-400 cursor-pointer"
              size={25}
            />
          </div>
        </div>
        <Image
          className="w-56 h-52"
          src={logoComoEnCasa}
          alt="Imagen de logo"
        />
        <div className=" gap-3 hidden md:flex">
          <FaCcVisa className="bg-white" size={25} />
          <FaCcMastercard className="bg-white" size={25} />
          <FaCcPaypal className="bg-white" size={25} />
          <FaCcAmex className="bg-white" size={25} />
        </div>
      </div>
      <div className="flex justify-between text-white pt-[70px] pb-12 border-b-[1px] border-white">
        <div className="flex flex-col pl-4">
          <h3 className="font-semibold text-xl mb-6">Contact us</h3>
          <div className="flex text-base gap-3 font-medium mb-1">
            <h4>ADDRESS:</h4>
            <h4>10-White street block, usa</h4>
          </div>
          <div className="flex text-base gap-3 font-medium mb-1 cursor-pointer">
            <h4>EMAIL:</h4>
            <h4>comoEnCasa@gmail.com</h4>
          </div>
          <div className="flex text-base gap-3 font-medium mb-1">
            <h4>PHONE:</h4>
            <h4>+155 598 658</h4>
          </div>
          <div className="flex flex-col text-base gap-1 font-medium mb-1">
            <h4>WORKING DAYS / HOURS :</h4>
            <h4>Time: 8:00AM - 6:00PM</h4>
          </div>
        </div>
        <div className="hidden flex-col pl-4 md:flex">
          <h3 className="font-semibold text-xl mb-6">Our Links</h3>
          <div className="flex flex-col text-base gap-1 font-medium mb-1">
            <h4>Faq's</h4>
            <h4>Privacy policy</h4>
            <h4>Contact us</h4>
            <h4>Terms and condition</h4>
            <h4>About us</h4>
            <h4>Search</h4>
          </div>
        </div>
        <div className="flex flex-col pl-4">
          <h3 className="font-semibold text-xl mb-6">Informations</h3>
          <div className="flex flex-col text-base gap-1 font-medium mb-1">
            <h4>Faq's</h4>
            <h4>Privacy policy</h4>
            <h4>Contact us</h4>
            <h4>Terms and condition</h4>
            <h4>About us</h4>
            <h4>Search</h4>
          </div>
        </div>
        <div className="flex flex-col pr-4">
          <h3 className="font-semibold text-xl mb-6">Our Products</h3>
          <div className="flex flex-col text-base gap-1 font-medium mb-1">
            <h4 className="cursor-pointer">Burguer</h4>
            <h4 className="cursor-pointer">Pizza</h4>
            <h4 className="cursor-pointer">Drinks</h4>
            <h4 className="cursor-pointer">Desserts</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pl-4 pr-4 pt-3 pb-3 text-white font-normal text-sm">
        <FaRegCopyright />
        <h4> 2023, Derechos Reservados</h4>
      </div>
    </div>
  );
}
