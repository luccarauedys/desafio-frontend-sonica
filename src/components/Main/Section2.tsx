import Image from "next/image";
import { CaretRight } from "@phosphor-icons/react";

export default function Section2() {
  return (
    <section className="container grid gap-12 grid-cols-1 md:grid-cols-3 relative md:py-12">
      <Image
        src={"/helix.png"}
        alt="helix icon"
        width={400}
        height={400}
        className="hidden md:block w-[280px] lg:w-[400px] absolute -z-10 top-0 -left-20 lg:-left-10"
      />
      <div className="container md:col-span-2 flex flex-col gap-4 lg:gap-8">
        <h4>Community-owned and operated</h4>
        <h2>Enter a Universe of Connected Services.</h2>
        <p className="max-w-none">
          Cronos apps and services connect using IBC, the Inter-Blockchain Communication protocol.
          This innovation enables you to freely exchange assets and data across sovereign.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="primary-button">Learn</button>
          <button className="secondary-button flex justify-center items-center gap-1">
            <span>Explore Tokens</span>
            <CaretRight size={18} weight="bold" />
          </button>
        </div>
      </div>

      <div className="container flex flex-col sm:flex-row md:flex-col gap-8 sm:gap-12 justify-center text-center">
        <div>
          <p className="text-5xl lg:text-7xl font-extrabold default-text-gradient">265+</p>
          <p>Apps & services</p>
        </div>
        <div>
          <p className="text-5xl lg:text-7xl font-extrabold default-text-gradient">$63B+</p>
          <p>Digital assets</p>
        </div>
      </div>
    </section>
  );
}
