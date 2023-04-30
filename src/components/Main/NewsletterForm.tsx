import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Section4() {
  return (
    <section className="container flex flex-wrap justify-center items-center gap-4 md:gap-8 py-16 md:py-24 border-b-[1px] border-t-[1px] border-white border-opacity-10">
      <div className="flex flex-col gap-2">
        <h3>Receive transmissions</h3>
        <p className="flex flex-wrap gap-1">
          Unsubscribe at any time.
          <Link href="/" className="font-medium flex gap-1">
            Privacy policy
            <ArrowUpRight size={18} weight="bold" />
          </Link>
        </p>
      </div>

      <form className="container max-w-[500px]">
        <input
          type="text"
          placeholder="Your email"
          className="bg-[#191919] p-4 placeholder:text-[#494949] focus:placeholder:text-transparent container"
        />
      </form>
    </section>
  );
}
