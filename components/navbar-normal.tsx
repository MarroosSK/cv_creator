"use client";

import React from "react";
import ContainerComponent from "./container-component";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { UserButton, useAuth } from "@clerk/nextjs";
import NavbarMobile from "./navbar-mobile";

const NavbarNormal = () => {
  const { isSignedIn } = useAuth();
  return (
    <ContainerComponent>
      <div className="flex h-14 items-center justify-between border-b border-slate-200 ">
        <Link href="/" className="flex z-40 font-semibold">
          <span className="">Resume Builder</span>
        </Link>

        <NavbarMobile />
        <div className="hidden items-center space-x-4 md:flex">
          <>
            <Link
              href="/dashboard"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Upgrade
            </Link>
            {!isSignedIn ? (
              <Link
                href="/sign-in"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Sign in
              </Link>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default NavbarNormal;
