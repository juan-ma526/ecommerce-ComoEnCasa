"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import bannerBurguer from "../assets/bannerBurguer.jpg";
import bannerPizza from "../assets/bannerPizza.jpg";
import bannerComida from "../assets/bannerComida.jpg";
import { useState } from "react";

const slides: JSX.Element[] = [
  <Image
    src={bannerBurguer}
    fill={true}
    priority={true}
    alt="Banner burguer"
  />,
  <Image src={bannerPizza} fill={true} priority={true} alt="Banner Pizza" />,
  <Image src={bannerComida} fill={true} priority={true} alt="Banner Comida" />,
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
    <div className="max-w-[1450px] h-[490px] w-full m-auto py-16 px-4 relative group">
      <motion.div
        className="w-full h-full rounded-2xl bg-center bg-cover transition duration-500 ease-in relative"
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {slides[currentIndex]}
      </motion.div>
      {/*Left arrow*/}
      <motion.div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={40} />
      </motion.div>
      {/*Right arrow*/}
      <motion.div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={40} />
      </motion.div>
    </div>
  );
}
