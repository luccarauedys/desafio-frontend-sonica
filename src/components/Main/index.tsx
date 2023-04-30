import NewsletterForm from "./NewsletterForm";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Main() {
  return (
    <main className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
      <Section1 />
      <Section2 />
      <Section3 />
      <NewsletterForm />
    </main>
  );
}
