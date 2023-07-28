import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

export default function Banner() {
  return (
    <div className="bg-marron-600 flex flex-col justify-center items-center text-white pt-2 pb-2 md:flex-row md:justify-between">
      <div className="flex gap-2 pl-4 pr-4 text-base justify-center items-center ">
        <BsTelephone />
        <span>+155 598 658</span>
        <CiMail />
        <span>comoEnCasa@gmail.com</span>
      </div>
      <div className="max-lg:hidden">
        <span>Up to 20% off on first order Shop Now</span>
      </div>
      <div className="flex gap-3 mr-6">
        <span>Argentina</span>
        <span>Spanish</span>
      </div>
    </div>
  );
}
