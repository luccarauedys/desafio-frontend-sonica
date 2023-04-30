import FooterColumn from "./FooterColumn";
import { footer_links } from "@/data/footer_links";

export default function Footer() {
  return (
    <div className="container flex flex-wrap gap-8 justify-center py-16">
      <FooterColumn data={footer_links.learn} />
      <FooterColumn data={footer_links.build} />
      <FooterColumn data={footer_links.explore} />
      <FooterColumn data={footer_links.participate} />
      <FooterColumn data={footer_links.resources} />
    </div>
  );
}
