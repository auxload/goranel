import React from 'react'
import { Navigation } from './navigation'
import Link from 'next/link'
import Logo from "@/public/Logo.svg"
import Image from 'next/image'
import { Menu } from 'lucide-react'
import MobileNavigation from './mobile-nav-config'

const Header = () => {
    return (
        <>
            <div className='h-9 bg-primary  text-white text-xs md:text-sm'>
                <ul className='flex gap-5 container h-full  items-center'>
                    <li>
                        <a href=""> +(40) 723 635 553</a>
                    </li>
                    <li>
                        <a href=""> gd69435@gmail.com</a>
                    </li>
                    <li>
                        <a href=""> Str Principală 239</a>
                    </li>
                </ul>
            </div>
            <header className="flex  border min-h-20 w-full shrink-0 items-center px-4 md:px-6">
                <div className="flex items-center  container">
                    <Link href="/" className=" flex items-center " prefetch={false}>
                        <Image alt='Logo' className='py-2 w-[150px] md:w-[250px]' src={Logo} />
                    </Link>
                    <Navigation className="md:flex items-center gap-4 sm:gap-6 ml-auto hidden" />
                    <MobileNavigation />
                </div>
            </header>
        </>
    )
}



export default Header