import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="container mx-auto px-4 lg:px-8 flex flex-col gap-10 lg:gap-24">
      <Header />
      <Main />
    </div>
  );
}
