import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Main() {
  return (
    <main className=" flex flex-col gap-16 lg:gap-24">
      <Section1 />
      <Section2 />
    </main>
  );
}
