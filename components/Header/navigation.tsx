"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cva } from "class-variance-authority"
import { usePathname } from "next/navigation"

export const navigationMenuTriggerStyle = cva(
    "group hover:underline inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-base font-medium transition-colors  hover:text-primary text-accent-foreground  focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-primary data-[state=open]:text-primary"
)
export const navigationMenuActiveStyle = cva("text-primary")

export type MenuItem = {
    title: string;
    href: string
}
export interface MenuItemWithSubmenu extends MenuItem {
    subMenu?: MenuItem[]
}
const services: MenuItem[] = [
    {
        title: "Sugem pula Ieftin",
        href: "/docs/primitives/alert-dialog",
    },
    {
        title: "Masa erotic",
        href: "/docs/primitives/hover-card",
    },

]

export const navMenuData: MenuItemWithSubmenu[] = [
    {
        title: "Acasă",
        href: "/"
    },
    {
        title: "Servicii",
        href: "/services",
        subMenu: services
    },
    {
        title: "Despre noi",
        href: "/despre-noi"
    },
    {
        title: "Cantactați-ne",
        href: "/contact"
    },
]


export function Navigation({ className }: { className?: string }) {
    const path = usePathname()
    return (
        <NavigationMenu className={className}>
            <NavigationMenuList className="flex-wrap">
                {navMenuData.map((menuItem, idx) => {
                    if (menuItem.subMenu) {
                        return (
                            <NavigationMenuItem key={idx}>
                                <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle())}>{menuItem.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="p-2 w-max ">
                                        {menuItem.subMenu.map((component) => (
                                            <ListItem
                                                className={`${path === component.href && navigationMenuActiveStyle()}`}
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    }
                    return (
                        <NavigationMenuItem key={idx}>
                            <Link href={menuItem.href} legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), `${path === menuItem.href && navigationMenuActiveStyle()}`)}>
                                    {menuItem.title}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        navigationMenuTriggerStyle(),
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
