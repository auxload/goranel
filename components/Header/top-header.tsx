import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import React from 'react'


type TopHeaderMenuItem = {
    icon: React.JSX.Element,
    href: string
    title?: string
}



const topHeaderMenuItemsSocials: TopHeaderMenuItem[] = [
    {
        icon: <Facebook className='size-3 md:size-6' />,
        href: "/",
    },
    {
        icon: <Youtube className='size-3 md:size-6' />,
        href: "/",
    },
    {
        icon: <Instagram className='size-3 md:size-6' />,
        href: "/",
    },
]




const TopHeader = () => {
    return (
        <div className='flex-1 '>
            <div className='   flex  justify-between text-white text-xs '>
                <ul className='flex gap-4   h-full  items-center'>
                    {topHeaderMenuItemsSocials.map(item => {
                        return (
                            <li className='flex items-center gap-2 text-xs text-muted-foreground'>
                                <a className='flex gap-1 items-center' href={item.href}>{item.icon} <span className='hidden md:block'>{item.title}</span></a>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default TopHeader