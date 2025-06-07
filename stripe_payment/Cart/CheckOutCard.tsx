"use client";
import { useDispatch, useSelector } from "react-redux";
import { ICart } from "@/app/utils/Types";
import { removeFromCart } from "@/app/Redux-toolkit/feature/cartSlice";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Button from "@/components/ui/myButton";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import StripePayment from "@/components/Cart/StripePayment";

const CheckOutCard = () => {
  const checkout = useSelector((state: { cart: ICart[] }) => state.cart);
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState(false);

  // Calculate total for each item
  const calculateTotal = (item: ICart) => {
    if (item.discount) {
      if (typeof item.discount === "string" && item.discount.includes("%")) {
        const discountedprice =
          Math.round((Number(item.price) * Number(item.discount)) / 100) *
          item.quantity;
        return item.price - discountedprice;
      } else if (typeof item.discount === "number") {
        const discountedprice =
          Math.round((Number(item.price) * Number(item.discount)) / 100) *
          item.quantity;
        return item.price * item.quantity - discountedprice;
      }
    }
    return item.price * item.quantity;
  };

  // Calculate overall total for checkout
  const totalAmount = checkout.reduce((total: number, item: ICart) => {
    return total + calculateTotal(item);
  }, 0);

  return (
    <div className="flex flex-row-reverse w-full gap-4 px-4 mt-20 transition-all duration-300">
      {/* Cart Section (Always on the right) */}
      <div
        className={`bg-white text-black border-2 flex flex-col rounded-md transition-all duration-300 w-1/3`}
      >
        <Accordion type="single" collapsible>
          {checkout.map((res: ICart) => (
            <AccordionItem key={res.uuid} value={`item-${res.uuid}`}>
              <div className="flex flex-col gap-2 px-2">
                {/* Accordion Header */}
                <AccordionTrigger className="flex justify-between bg-white text-black p-2 border-b-2 relative">
                  <div className="flex gap-3">
                    <div className="flex items-center">
                      <Image
                        src={res.image}
                        alt="cartItem"
                        width={200}
                        height={200}
                        className="w-20"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[16px]">{res.title}</h3>
                      <h6 className="text-sm">Quantity: {res.quantity} Pcs</h6>
                      <h6 className="text-sm">
                        {res.availability ? "Available" : "Not Available"}
                      </h6>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(res.uuid))}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition duration-150 ease-in-out"
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </AccordionTrigger>

                {/* Accordion Content */}
                <AccordionContent className="flex flex-col gap-2 px-3 py-2 border-b-2">
                  <div className="flex justify-between">
                    <h2>Sub Total</h2>
                    <h2>{Math.round(res.price * res.quantity)}</h2>
                  </div>
                  <div className="flex justify-between">
                    <h2>Delivery Charges</h2>
                    <h2>
                      {res.delivery_charges
                        ? res.delivery_charges
                        : "Free Delivery"}
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <h2>Discounted Price</h2>
                    {res.discount
                      ? typeof res.discount === "string" &&
                        res.discount.includes("%")
                        ? Math.round(
                            (Number(res.price) * Number(res.discount)) / 100
                          ) * res.quantity
                        : typeof res.discount === "number"
                          ? Math.round(
                              (Number(res.price) * Number(res.discount)) / 100
                            ) * res.quantity
                          : "0"
                      : "0"}
                  </div>
                  <div className="flex justify-between text-lg pb-3 border-b-2">
                    <h2>Total</h2>
                    <h2>{Math.round(calculateTotal(res))}</h2>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex justify-between text-xl pb-3 border-b-2 px-3 my-5 shadow-xl items-center text-black font-bold">
          <h2>Total</h2>
          <h2>{Math.round(totalAmount)}</h2>
        </div>

        <Button
          title="Proceed to Payment"
          width="w-full"
          xpadding="px-10"
          ypadding="py-2"
          rounded="rounded-md"
          onClick={() => setIsCheckout(true)}
        />
      </div>

      {/* Payment Section (Appears on the right) */}
      {isCheckout && (
        <div className="w-2/3 bg-white border-2 rounded-md p-4 transition-all duration-300">
          <StripePayment amount={totalAmount} />
        </div>
      )}
    </div>
  );
};

export default CheckOutCard;
