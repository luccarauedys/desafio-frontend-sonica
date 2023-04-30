import Link from "next/link";

type FooterProps = {
  data: {
    column_name: string;
    links: { title: string; link: string }[];
  };
};

export default function FooterColumn({ data }: FooterProps) {
  const { column_name, links } = data;

  return (
    <div className="basis-[200px] flex flex-col gap-4">
      <h5 className="text-lg font-semibold">{column_name}</h5>
      {links.map(({ title, link }) => (
        <Link key={title} href={link} className="opacity-40">
          {title}
        </Link>
      ))}
    </div>
  );
}
