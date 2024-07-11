import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import React from 'react'


type TopHeaderMenuItem = {
    icon: React.JSX.Element,
    href: string
    title?: string
}



const topHeaderMenuItemsSocials: TopHeaderMenuItem[] = [
    {
        icon: <Facebook className='size-4 md:size-6' />,
        title: "Facebook",
        href: "/",
    },
    {
        icon: <Youtube className='size-4 md:size-6' />,
        title: "Youtube",

        href: "/",
    },
    {
        icon: <Instagram className='size-4 md:size-6' />,
        title: "Instagram",

        href: "/",
    },
]
const topHeaderMenuItemsContact: TopHeaderMenuItem[] = [
    {
        icon: <Phone className='size-4 md:size-6' />,
        title: "0737122906",
        href: "/",
    },
    {
        icon: <Mail className='size-4 md:size-6' />,
        title: "sexCuAlex@gmail.com",

        href: "/",
    },
]




const TopHeader = () => {
    return (

        <div className=' relative top-0 bg-primary flex  w-full h-10 text-white text-xs  '>
            <div className='container  flex justify-between'>
                <ul className=' flex gap-4   h-full  items-center'>
                    {topHeaderMenuItemsSocials.map((item, idx) => {
                        return (
                            <li key={idx} className='flex items-center gap-2 text-xs '>
                                <a className='flex gap-1 items-center' href={item.href}>{item.icon} <span className='hidden md:block'>{item.title}</span></a>
                            </li>
                        )
                    })}

                </ul>
                <ul className=' flex gap-4   h-full  items-center'>
                    {topHeaderMenuItemsContact.map((item, idx) => {
                        return (
                            <li key={idx} className='flex items-center gap-2 text-xs '>
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