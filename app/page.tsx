import type { Metadata } from "next";
import Carrousel from "./components/Carrousel";
import productoBurguer from "./assets/productoBurguer.jpg";
import productoBurguerCheese from "./assets/productoBurguerCheese.jpg";
import productoDrink from "./assets/productoDrink.jpg";
import productoPizza from "./assets/productoPizza.jpg";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Carrousel />
      {/*Muestra comida con hover */}
      <div className="max-w-[1700px] h-[1253px] w-full mt-0  md:h-[690px]">
        <div className="flex flex-col justify-center items-center gap-4 w-full h-full py-11 px-11 md:flex-row">
          <div className="w-full h-[290px] md:w-3/12 md:h-full transition duration-500 hover:scale-125  hover:cursor-pointer">
            <Image src={productoPizza} alt="Imagen pizza" className="h-full" />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-6/12 h-full">
            <Image
              src={productoBurguer}
              alt="Imagen hamburguesa"
              className="h-[290px] w-full transition duration-500 hover:scale-125  hover:cursor-pointer"
            />
            <Image
              src={productoBurguerCheese}
              alt="Imagen hamburguesa"
              className="h-[295px] w-full transition duration-500 hover:scale-125  hover:cursor-pointer"
            />
          </div>
          <div className=" w-full h-[290px] md:w-3/12 md:h-full transition duration-500 hover:scale-125  hover:cursor-pointer">
            <Image src={productoDrink} alt="Imagen bebida" className="h-full" />
          </div>
        </div>
      </div>
      {/*About Store */}
      <div className="flex flex-col justify-center items-center mt-5 py-11 px-11 m-auto">
        <div className="flex flex-col justify-center items-center pb-6">
          <h1 className="text-5xl text-zinc-900 font-medium">About store</h1>
          <h4 className="mt-6 text-sm text-neutral-600">
            We waive your return shipping fee but an additional forward
          </h4>
          <h4 className="text-sm text-neutral-600">
            shipping fee will be charged for any new items.
          </h4>
        </div>
        <div className="flex flex-wrap ">
          <div className="py-[42px] px-[60px] w-full max-w-[50%] border-r-2 border-b-2 border-solid border-neutral-300">
            <div className="text-center">
              <TbTruckDelivery size={50} className="self-center m-auto" />
              <div>
                <h1 className="text-lg mb-3 font-medium text-zinc-900">
                  Free shipping
                </h1>
                <h4 className="text-sm text-neutral-600">
                  Excellent Company I Will Definitely Work Hard Fashion With
                  Them Again.....
                </h4>
              </div>
            </div>
          </div>
          <div className="py-[42px] px-[60px] w-full max-w-[50%] border-b-2 border-solid border-neutral-300">
            <div className="text-center">
              <BsTrophy size={50} className="self-center m-auto" />
              <div>
                <h1 className="text-lg mb-3 font-medium text-zinc-900">
                  Quality guranteed
                </h1>
                <h4 className="text-sm text-neutral-600">
                  Excellent Company I Will Definitely Work Hard Fashion With
                  Them Again.....
                </h4>
              </div>
            </div>
          </div>
          <div className="py-[42px] px-[60px] w-full max-w-[50%] border-solid ">
            <div className="text-center">
              <BiSupport size={50} className="self-center m-auto" />
              <div>
                <h1 className="text-lg mb-3 font-medium text-zinc-900">
                  Free returns
                </h1>
                <h4 className="text-sm text-neutral-600">
                  Excellent Company I Will Definitely Work Hard Fashion With
                  Them Again.....
                </h4>
              </div>
            </div>
          </div>
          <div className="py-[42px] px-[60px] w-full max-w-[50%] border-l-2 border-solid border-neutral-300">
            <div className="text-center">
              <MdOutlineAssignmentReturn
                size={50}
                className="self-center m-auto"
              />
              <div>
                <h1 className="text-lg mb-3 font-medium text-zinc-900">
                  Support online
                </h1>
                <h4 className="text-sm text-neutral-600">
                  Excellent Company I Will Definitely Work Hard Fashion With
                  Them Again.....
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
