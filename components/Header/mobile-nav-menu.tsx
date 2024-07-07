"use client";
import React from "react";
// import type { NavItem } from "@/types";
import * as Icons from "lucide-react"; // Import all icons from React Lucid
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import {
    NavigationMenu,

    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,

} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuItem, MenuItemWithSubmenu, navMenuData } from "../Header/navigation";
import { Button } from "../ui/button";
// import Branding from "../Branding";
// import { activeStyle } from "./nav-menu";
import { usePathname } from "next/navigation";
import { navigationMenuTriggerStyle } from "./navigation";

const MobileNavMenu = () => {
    return (
        <div className='ml-auto  md:hidden mt-[6px]'>
            <Sheet>
                <SheetTrigger>
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent
                    side={"right"}
                    className="py-9 px-6 overflow-auto gap-10 flex flex-col "
                >
                    <SheetHeader>
                        {/* <Branding /> */}
                    </SheetHeader>
                    <Nav />
                    <div className="grid  gap-1 mt-auto">
                        <Button>Log In</Button>
                        <Button variant={"ghost"}>Sign In</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>

    );
};

export const Nav = () => {
    const path = usePathname();
    return (
        <NavigationMenu className="max-w-none block " orientation="vertical">
            <NavigationMenuList className="max-w-none block space-x-0 space-y-3 text-accent-foreground/50 " >
                {navMenuData.map((item) => {
                    if (!!item.subMenu === true) {
                        return (
                            <MenuItemLink
                                href={item.href}
                                key={item.title}
                                title={item.title}
                                subMenu={item.subMenu}
                            />
                        );
                    }
                    return (
                        <ItemLink
                            title={item.title}
                            href={item.href}
                            key={item.title}
                        />
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export const MenuItemLink = ({ title, subMenu, href }: MenuItemWithSubmenu) => {

    return (
        <Collapsible>
            <li>
                <CollapsibleTrigger
                    className={cn(navigationMenuTriggerStyle(), "w-full justify-start text-foreground text-md")}
                >

                    {title}
                    <Icons.ChevronDown className="ml-auto relative top-[1px] h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
            </li>
            <CollapsibleContent className="flex pl-4 gap-2">
                {/* <div className="bg-primary mt-2 w-[1px]"></div> */}
                <ul className="flex-1 gap-2 pt-2 grid">
                    {subMenu?.map((item) => (
                        <ItemLink
                            key={item.title}
                            title={item.title}
                            href={item.href}
                        />
                    ))}
                </ul>
            </CollapsibleContent>
        </Collapsible>
    );
};



export const ItemLink = ({ title, href }: MenuItem) => {
    return (
        <NavigationMenuItem className="block w-full max-w-none">
            <Link href={href!} legacyBehavior passHref>
                <NavigationMenuLink
                    className={cn(
                        navigationMenuTriggerStyle(), "text-foreground text-md"

                    )}
                >
                    {title}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
};

export default MobileNavMenu;
