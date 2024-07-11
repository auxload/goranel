import React from 'react'
import { Navigation } from './navigation'
import Link from 'next/link'
import Logo from "@/public/Logo.svg"
import Image from 'next/image'
import { Flower, Menu } from 'lucide-react'
import MobileNavMenu from './mobile-nav-menu'
import TopHeader from './top-header'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <>
            <TopHeader />

            <header className="flex sticky top-0   bg-white flex-col min-h-20 w-full shrink-0 items-center ">


                <div className="flex items-center  container justify-between">
                    <div className='hidden md:flex flex-1'></div>

                    <Link href="/" className=" flex  items-center flex-1 justify-center" prefetch={false}>
                        <Image alt='Logo' className='py-2 w-[200px] md:w-[250px]' src={Logo} />
                    </Link>
                    <div className=' flex-1 hidden md:flex'>
                        <Button variant={"link"} className='ml-auto rounded-full '><Flower/> Contactează-ne  acum!</Button>

                    </div>
                </div>
                <div className='py-4'>
                    <Navigation className="md:flex   items-center flex-1 gap-4 sm:gap-6  hidden" />
                    <MobileNavMenu />
                </div>
            </header>
        </>
    )
}



export default Header