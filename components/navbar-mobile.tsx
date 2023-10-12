import React from "react";
import { Crown, Layout, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import NavbarMobileRoutes from "./navbar-mobile-routes";

const navRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Crown,
    label: "Upgrade",
    href: "/pricing",
  },
];

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <SheetClose asChild>
          <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <Link href="/" className="p-6 flex font-semibold">
              <span className="">Resume Builder</span>
            </Link>
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                {navRoutes.map((route) => (
                  <NavbarMobileRoutes
                    key={route.label}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
