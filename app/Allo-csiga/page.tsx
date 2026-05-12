import Link from "next/link";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/Allo-csiga/ero", label: "F erő" },
  { href: "/Allo-csiga/gravitacios", label: "G gravitációs erő" },
  { href: "/Allo-csiga/sugar", label: "Csiga sugara" },
];

export default function AlapokPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="flex w-100 flex-col items-center rounded-full bg-gray-50 p-8 shadow-2xl" >
        <h1 className="text-xl font-semibold text-center">Álló csigára ható erők kiszámítása</h1>
        <ul className="mt-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="text-blue-500 font-semibold hover:font-bold hover:bg-gray-200 rounded-full px-3"  href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}