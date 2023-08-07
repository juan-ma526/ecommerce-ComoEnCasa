import CategoryBurguer from "../assets/categoryBurguer.jpg";
import CategoryPizza from "../assets/categoryPizza.jpg";
import CategoryDrink from "../assets/categoryDrink.jpg";
import Image from "next/image";

export default function Category() {
  return (
    <div className="py-9 px-9 max-w-7xl h-auto m-auto">
      <div className="pl-4 pr-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pb-9 gap-4">
          <h3 className="text-xl text-neutral-600">Category</h3>
          <h1 className="text-5xl text-zinc-900">Select your Category</h1>
        </div>
        <div className="flex justify-between gap-x-4 gap-y-2 flex-wrap">
          <Image
            src={CategoryBurguer}
            alt="categoria Hamburguesa"
            className="w-44 max-h-[200px] shadow-2xl transition duration-500 hover:scale-125 md:w-52"
          />
          <Image
            src={CategoryPizza}
            alt="categoria Pizza"
            className="w-44 max-h-[200px] shadow-2xl transition duration-500 hover:scale-125 md:w-52"
          />
          <Image
            src={CategoryDrink}
            alt="categoria Trago"
            className="w-44 max-h-[200px] shadow-2xl transition duration-500 hover:scale-125 md:w-52"
          />
        </div>
      </div>
    </div>
  );
}
