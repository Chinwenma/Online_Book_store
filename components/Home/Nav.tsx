import Link from "next/link";
import Image from "next/image";
import React from "react";
import SeacrhBox from "../Helper/SeacrhBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartBtn from "../Helper/ShoppingCartBtn";

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 bg-white z-[1] shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
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
          <HeartIcon size={20} cursor={"pointer"}/>
          <ShoppingCartBtn />
          <UserIcon  cursor={"pointer"} size={26}/>

        </div>
      </div>
    </div>
  );
};

export default Nav;
