import Link from "next/link";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/allo/ero", label: "F erő" },
  { href: "/allo/gravitacios", label: "G gravitációs erő" },
  { href: "/allo/sugar", label: "Csiga sugara" },
];

export default function AlapokPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-100 flex-col items-center rounded-full bg-gray-50 p-8 shadow-2xl">
        <h1 className="text-center text-xl font-semibold">Álló csigára ható erők kiszámítása</h1>
        <ul className="mt-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="rounded-full px-3 font-semibold text-blue-500 hover:bg-gray-200 hover:font-bold"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
