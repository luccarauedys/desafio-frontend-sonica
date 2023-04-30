import Link from "next/link";
import { useState } from "react";
import { CaretRight, List, XCircle } from "@phosphor-icons/react";
import { links } from "@/data/header_links";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-8 lg:px-16 lg:py-12">
      <Link
        href={"/"}
        className="text-2xl lg:text-3xl font-semibold hover:text-slate-300 duration-500"
      >
        CRONOS
      </Link>

      <nav className="hidden xl:flex xl:gap-10">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className="text-xl font-medium hover:text-gray-400 duration-500"
          >
            {link.title}
          </Link>
        ))}
      </nav>

      <Link
        href={"/"}
        className="hidden text-lg font-medium hover:text-gray-400 duration-500 lg:text-xl xl:flex xl:justify-center xl:items-center gap-1"
      >
        <span>Get CRONOS</span>
        <CaretRight size={18} weight="bold" />
      </Link>

      <List
        weight="bold"
        onClick={() => setMenuIsOpen(true)}
        className="text-4xl cursor-pointer hover:scale-110 duration-500 xl:hidden"
      />

      {menuIsOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-10 bg-[#050505] opacity-95">
          <XCircle
            onClick={() => setMenuIsOpen(false)}
            className="absolute top-5 right-5 text-3xl cursor-pointer hover:scale-110 duration-500"
          />

          <div className="h-screen flex flex-col gap-5 items-center pt-24">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className="text-lg font-medium text-center border-b-2 hover:scale-110 duration-300"
              >
                {link.title}
              </Link>
            ))}
            <Link href={"/"} className="primary-button px-12 rounded">
              GET CRONOS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
