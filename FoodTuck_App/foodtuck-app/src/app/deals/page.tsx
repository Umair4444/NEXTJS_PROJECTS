import React from "react";
import Menucard3 from "@/assets/dish/menu3.png";
import Menucard4 from "@/assets/dish/menu4.png";
import TopCard from "@/components/ui/TopCard";
import MenuCard from "@/components/Menu/MenuCard";
import ClientReviews from "@/components/Menu/ClientReviews";
import Partners from "@/components/Menu/Partners";

const MenuPage = () => {
  return (
    <>
      <div className="flex flex-col gap-20 bg-white text-black ">
        <div>
          <TopCard title="Menu" />
        </div>
        <div className="flex flex-col ">
          <MenuCard image={Menucard3} />
          <MenuCard image={Menucard4} flexDirection="flex-row-reverse" />
          <ClientReviews />
          <MenuCard image={Menucard3} />
          <MenuCard image={Menucard4} flexDirection="flex-row-reverse" />
          <Partners />
        </div>
      </div>
    </>
  );
};

export default MenuPage;
