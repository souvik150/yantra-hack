import { useRef } from 'react';
import Logo from './../../public/logo/logo.png';
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <div className="mx-16 my-8 flex flex-col md:flex-row lg:flex-row items-center justify-between">
            <a href="/">
            <Image src={Logo} alt="qwerty" className="w-60"/>
            </a>
            <button className="px-14 py-2 rounded-xl bg-[#A91CEC] space-y-10 md:space-x-0 lg:space-x-8" href="/">
                Connect Wallet
            </button>
        </div>
    );
}

export default Navbar;