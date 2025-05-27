"use client";

import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { Hamburger } from "./Hamburger";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import type { IWish } from "@/app/utils/Types";
import Search from "./Search/Search";
import { RootState } from "@/app/Redux-toolkit/store";

const Navbar = () => {
  const pathname = usePathname();
  const cart = useSelector((state: any) => state.cart);
  const wishlist = useSelector((state: { wish: IWish[] }) => state.wish);
  const { products, status, error } = useSelector(
    (state: RootState) => state.product
  );

  return (
    <>
      {pathname && !pathname.startsWith("/studio") ? (
        <nav className="sticky top-0 z-40 w-full bg-black py-4">
          <div className=" mx-auto px-4">
            <div className="flex flex-col items-center gap-4">
              {/* Logo */}
              <Link
                href={"/"}
                className="text-3xl font-bold font-helvetica mb-2"
              >
                <h1 className="text-[#FF9F0D]">
                  Food<span className="text-white">tuck</span>{" "}
                  <span>Express</span>
                </h1>
              </Link>

              <div className="w-full flex flex-row gap-4 lg:items-center lg:justify-around">
                {/* Hamburger for mobile */}
                <div className="lg:hidden self-start">
                  <Hamburger />
                </div>

                {/* Navigation Links - Hidden on mobile, visible on larger screens */}
                <div className="hidden lg:block ">
                  <ul className="flex flex-wrap items-center justify-center gap-4 lg:text-lg text-nowrap text-white">
                    {["Home", "Deals", "Blogs", "Menu", "About", "Shop"].map(
                      (item) => (
                        <li key={item} className="hover:text-yellow-600">
                          <Link
                            href={
                              item === "Home" ? "/" : `/${item.toLowerCase()}`
                            }
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                    <Link href={"/contact-us"}>Contact Us</Link>
                  </ul>
                </div>

                {/* Search and Icons */}
                <div className="flex items-center gap-4 w-full lg:w-auto">
                  {/* Search Bar */}
                  <Search products={products} />

                  {/* Icons */}
                  <div className="flex items-center gap-3 text-xl text-white">
                    {[
                      { href: "/checkout", Icon: BsCart4, count: cart.length },
                      {
                        href: "/wishlist",
                        Icon: FaHeart,
                        count: wishlist.length,
                      },
                      { href: "/login", Icon: FaUser },
                    ].map(({ href, Icon, count }, index) => (
                      <Link key={index} href={href} className="relative">
                        <Icon />
                        {count > 0 && (
                          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                            {count}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
