import Image from "next/image";
import { Inter } from "next/font/google";
import index from "./login/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <> 
      <index />
    </>
  );
}
