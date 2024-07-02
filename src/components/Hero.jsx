import AllCoins from "./AllCoins";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {
  useGSAP(() => {
    gsap.from(".headline", {
      opacity: 0,
      duration: 1,
      y: "100%",
    });
    gsap.from(".subtitle", {
      duration: 1,
      opacity: 0,
      x: "-100%",
    });
  });
  return (
    <section className="py-36">
      <div>
        <h1 className="headline text-white text-center lg:text-left font-semibold text-5xl font-[Inter]">
          Search All types of
          <br />
          <span className="text-orange-400 text-[2.95rem] lg:text-7xl">
            Cryptocurrencies
          </span>
        </h1>
        <p className="subtitle text-gray-400 font-[Inter] pt-4 text-center  lg:text-left lg:w-[400px]">
          With faster response time and accurate data of Digital
          Cryptocurrencies in one stop!
        </p>
      </div>
      <section className="mt-10">
        <AllCoins />
      </section>
    </section>
  );
};

export default Hero;
