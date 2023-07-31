import type { Metadata } from "next";
import Carrousel from "./components/Carrousel";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return <Carrousel />;
}
