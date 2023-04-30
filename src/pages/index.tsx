import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-8 flex flex-col gap-10 lg:gap-24">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
