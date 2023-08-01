import type { Metadata } from "next";
import Carrousel from "./components/Carrousel";
import productoBurguer from "./assets/productoBurguer.jpg";
import productoBurguerCheese from "./assets/productoBurguerCheese.jpg";
import productoDrink from "./assets/productoDrink.jpg";
import productoPizza from "./assets/productoPizza.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Carrousel />
      <div className="max-w-[1700px] h-[690px] w-full mt-56 md:mt-0">
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
    </div>
  );
}
