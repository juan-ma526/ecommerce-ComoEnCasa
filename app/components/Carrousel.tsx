"use client";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import bannerBurguer from "../assets/bannerBurguer.jpg";
import bannerPizza from "../assets/bannerPizza.jpg";
import bannerComida from "../assets/bannerComida.jpg";
import { useState } from "react";

const slides: JSX.Element[] = [
  <Image src={bannerBurguer} fill={true} alt="Banner burguer" />,
  <Image src={bannerPizza} fill={true} alt="Banner Pizza" />,
  <Image src={bannerComida} fill={true} alt="Banner Comida" />,
];

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const nexIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(nexIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1400px] h-[427px] w-full m-auto py-16 px-4 relative group">
      <div className="w-full h-full rounded-2xl bg-center bg-cover transition duration-500 ease-out">
        {slides[currentIndex]},
      </div>
      {/*Left arrow*/}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/*Right arrow*/}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}
