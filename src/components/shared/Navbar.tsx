'use client'

import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import logo from '@/assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const pathname = usePathname();
    const links = 
    <>
        <li><Link className={`links ${pathname === '/' ? 'text-blue-500' : 'text-slate-700'} text-base font-medium`} href='/'>Home</Link></li>
        <li><Link className={`links ${pathname === '/apps' ? 'text-blue-500' : 'text-slate-700'} text-base font-medium`}  href='/apps'>Apps</Link></li>
        <li><Link className={`links ${pathname === '/installation' ? 'text-blue-500' : 'text-slate-700'} text-base font-medium`}  href='/installation'>Installation</Link></li>
    </>
    return (
    <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                {" "}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
                </svg>
            </div>
            <ul tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
            </ul>
            </div>
            <Image src={logo} height={50} width={50} alt='hero-logo' />
            <Link href={'/'} className="text-xl text-slate-900/80 font-bold ml-2 md:block hidden">App Store</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {links}
            </ul>
        </div>
        <div className="navbar-end gap-2">
            <Link href="#" className="btn btn-sm btn-gradient text-white md:font-medium"><FaGithub />
            Contribute
            </Link>
        </div>
        </div>
    );
};

export default Navbar;
