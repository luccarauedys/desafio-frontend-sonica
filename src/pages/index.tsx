import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-8 lg:gap-16 px-4 md:px-8">
      <Header />
      <Main />
    </div>
  );
}
