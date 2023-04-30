import Image from "next/image";
import { CaretRight } from "@phosphor-icons/react";
import { benefits } from "@/data/cronos_hub_benefits";

export default function Section3() {
  return (
    <section className="container md:pb-12 flex flex-col gap-8">
      <div
        className="container flex flex-col gap-8 items-center text-center bg-thorus md:py-36 md:-mt-16 md:-mb-16"
        data-aos="fade-up"
      >
        <h4>Enter the Cronos Hub</h4>
        <h2>The Heart of the Interchain.</h2>
        <p>
          Serving as the economic center of Cronos, the Cronos Hub is a blockchain that provides
          vital services to the Interchain.
        </p>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8">
        {benefits.map((item) => (
          <div key={item.title} className="container flex flex-col gap-4" data-aos="fade-up">
            <Image
              src={item.icon_path}
              alt={`${item.title} icon`}
              height={180}
              width={180}
              className="self-center sm:self-start w-32 md:w-[180px]"
            />
            <h3 className="self-center sm:self-start">{item.title}</h3>
            <p className="self-center text-center sm:self-start sm:text-start">
              {item.description}
            </p>
          </div>
        ))}
        <div className="container sm:w-72" data-aos="fade-up">
          <button className="container flex justify-center items-center gap-2 primary-button">
            <span>Cosmos Hub</span>
            <CaretRight size={18} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
