// "use client"

import Link from "next/link";
import Image from "next/image";
import React from "react";
import SeacrhBox from "../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartBtn from "../Helper/ShoppingCartBtn";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <div className=" bg-black h-[12vh] sticky top-0  z-[1] shadow-md ">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full ">
        <Link href={"/"}>
          <Image
            src="/images/book1.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <div className="flex items-center space-x-6">
          <SeacrhBox />
          <HeartIcon size={20} cursor={"pointer"} />
          <ShoppingCartBtn />

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>          
              <UserIcon cursor={"pointer"} size={26} />
            </SignInButton>
          </SignedOut>

        </div>
      </div>
    </div>
  );
};

export default Nav;
