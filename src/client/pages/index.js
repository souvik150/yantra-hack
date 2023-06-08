import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from "@/components/navBar/navBar";

import Fig from "./../public/images/heroindex.png";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavBar/>
        <div className="pb-6"></div>
        <div className="px-12 flex flex-col md:flex-row lg:flex-row my-8 w-full justify-between items-center py-30">
            <div className="text-7xl w-[40vw] md:w-[50vw] lg:w-[50vw] leading-relaxed font-bold">
                Circular Economy Made Simple: Blockchain and IoT for Sustainable Living
            </div>
            <Image src={Fig} alt="" className="w-[40vw]"/>
        </div>
    </main>
  )
}
