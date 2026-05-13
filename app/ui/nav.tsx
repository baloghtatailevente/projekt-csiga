"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/", label: "Főoldal" },
  { href: "/allo", label: "Álló csigák" },
  { href: "/mozgo", label: "Mozgó csigák" },
  { href: "/nevjegy", label: "Névjegy" },
];

export default function Nav() {
  const path = usePathname();

  console.log(path);

  return (
    <>
      <div className="navbar mb-5 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="btn btn-ghost md:hidden" role="button" tabIndex={0}>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M4 6h16M4 12h8m-8 6h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />{" "}
              </svg>
            </div>
            <ul
              className="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
              tabIndex={-1}
            >
              {links.map((link, index) => (
                <li
                  className={clsx("hover:rounded-2xl", { border: path == link.href })}
                  key={index}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link className="btn text-xl btn-ghost" href="/">
            <Image alt="Logo" height={50} loading="eager" src="/logo.png" width={50} />
            Csiga
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => (
              <li
                className={clsx("hover:rounded-2xl", { "rounded-2xl border": path == link.href })}
                key={index}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
      </div>
    </>
  );
}
