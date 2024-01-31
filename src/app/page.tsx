import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import HomePage from "./(frontend)/home/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <Footer />
      
    </main>
  );
}
