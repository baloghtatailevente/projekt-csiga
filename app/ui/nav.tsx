import Image from "next/image";

export default function Nav() {
  return (
    <>
        <div className="navbar bg-base-100 shadow-sm mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="btn btn-ghost lg:hidden" role="button" tabIndex={0}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M4 6h16M4 12h8m-8 6h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /> </svg>
            </div>
            <ul
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              tabIndex={-1}>
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><Image alt="Logo" height={50} src="/logo.png" width={50} />Csiga</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Főoldal</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  )
}