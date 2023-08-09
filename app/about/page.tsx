import type { Metadata } from "next";
import restaurant from "../assets/restaurante.jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="py-[38px] flex flex-col bg-gray-200 justify-center items-center">
        <h2 className="text-base">Home / About-us</h2>
        <h3 className="my-8 text-3xl">About-us</h3>
      </div>
      <div className="py-[45px] px-[15px]">
        <Image
          src={restaurant}
          alt="Imagen restaurant"
          className="h-[264px] w-full my-[30px]"
        />
        <div className="flex px-[15px] pb-[45px]">
          <div className="flex flex-col max-w-[59%] justify-center">
            <h2 className="text-xl ml-[18px]">what we do</h2>
            <h2 className="font-semibold text-[45px] ">About your furniture</h2>
            <p className="mt-5 mb-0 text-base">
              furniture, household equipment, usually made of wood, metal,
              plastics, marble, glass, fabrics, or related materials and having
              a variety of different purposes.
            </p>
            <p className="mt-5 mb-0 text-base">
              The practice of using natural objects as rudimentary pieces of
              furniture likely dates to the beginning of human civilization
            </p>
            <p className="mt-5 mb-0 text-base">
              Each piece of furniture in their home suited the style of the
              house
            </p>
          </div>
          <div className="flex flex-col text-white bg-marron-800 p-[30px]">
            <h2 className="font-semibold text-[45px]">Why choose us?</h2>
            <div className="flex gap-4 mt-[25px] items-center">
              <BiSolidRightArrow />
              <p className=" text-base mt-[25px]">
                The word furniture comes from the French fourniture, which means
                equipment.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <BiSolidRightArrow />
              <p className=" text-base mt-[25px]">
                Wood is the material most often used for making furniture.{" "}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <BiSolidRightArrow />
              <p className=" text-base mt-[25px]">
                Metals have been used since antiquity for making and ornamenting
                furniture.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <BiSolidRightArrow />
              <p className=" text-base mt-[25px]">
                Of all furniture forms, the chair may be the most important.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
