"use client";

import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";



import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;

export function Hamburger() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className=" text-xl m-3">
          <GiHamburgerMenu />
          {/* <Button variant="outline">{side}</Button> */}
          </SheetTrigger>

          <SheetContent side={side} className="flex justify-between w-fit">
            <SheetHeader>
              <div>
                <ul className="flex flex-col items-start justify-center px-5 gap-5 text-lg font-normal text-black  ">
                  <li className="hover:text-yellow-600  active:text-yellow-500">
                    <Link href={"/"} className="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={"/deals"}>Deals</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link href={"/menu"}>Menu</Link>
                  </li>
                  <li className=" gap-1 items-center">
                    <Link href={"/about"} className="">
                      About
                      {/* use select from shadcn */}
                    </Link>
                  </li>
                  <li>
                    <Link href={"/shop"}>Shop</Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </SheetHeader>
            <SheetClose className=" h-fit text-black text-xl ">
            <IoCloseCircle />
            </SheetClose>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
