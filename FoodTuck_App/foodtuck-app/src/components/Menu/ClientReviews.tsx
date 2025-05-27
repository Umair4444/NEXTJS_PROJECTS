import React from "react";
import Group4 from "@/assets/Group.png";
import Group1 from "@/assets/Group (1).png";
import Group2 from "@/assets/Group (2).png";
import Group3 from "@/assets/Group (3).png";
import ReviewCard from "./ReviewCard";

const ClientReviews = () => {
  return (
    <div className="w-full py-10 flex gap-3 items-center justify-evenly mt-10 md:mt-20 lg:mt-20">
      <ReviewCard image={Group4} title="Professional Chefs" number="420" />
      <ReviewCard image={Group1} title="Items Of Food" number="320" />
      <ReviewCard image={Group2} title="Years Of Experienced" number="30+" />
      <ReviewCard image={Group3} title="Happy Customers" number="220" />
    </div>
  );
};

export default ClientReviews;
