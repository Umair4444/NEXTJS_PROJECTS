"use client";

import { useState } from "react";
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
import StripePayment from "@/components/Cart/StripePayment";

// CheckoutCard displays the current cart items and handles the transition to payment
const CheckOutCard = () => {
  // Retrieve cart items from Redux store
  const checkout = useSelector((state: { cart: ICart[] }) => state.cart);
  const dispatch = useDispatch();

  // State to toggle the display of the payment section
  const [isCheckout, setIsCheckout] = useState(false);

  // Function to calculate the total price for an individual cart item
  const calculateTotal = (item: ICart) => {
    if (item.discount) {
      // Check if discount is given as a percentage string (e.g., "10%")
      if (typeof item.discount === "string" && item.discount.includes("%")) {
        const discountedPrice =
          Math.round((Number(item.price) * Number(item.discount)) / 100) *
          item.quantity;
        return item.price * item.quantity - discountedPrice;
      } else if (typeof item.discount === "number") {
        const discountedPrice =
          Math.round((Number(item.price) * Number(item.discount)) / 100) *
          item.quantity;
        return item.price * item.quantity - discountedPrice;
      }
    }
    // Return full price if no discount
    return item.price * item.quantity;
  };

  // Calculate the overall total amount for all items in the cart
  const totalAmount = checkout.reduce((total: number, item: ICart) => {
    return total + calculateTotal(item);
  }, 0);

  return (
    <div className="flex flex-row-reverse w-full gap-4 px-4 mt-20 transition-all duration-300">
      {/* Cart Section */}
      <div className="bg-white text-black border-2 flex flex-col rounded-md transition-all duration-300 w-1/3">
        <Accordion type="single" collapsible>
          {checkout.map((item: ICart) => (
            <AccordionItem key={item.uuid} value={`item-${item.uuid}`}>
              <div className="flex flex-col gap-2 px-2">
                {/* Accordion Header */}
                <AccordionTrigger className="flex justify-between bg-white text-black p-2 border-b-2 relative">
                  <div className="flex gap-3">
                    <div className="flex items-center ">
                      <Image
                        src={item.image}
                        alt="cartItem"
                        width={200}
                        height={200}
                        className="w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-[16px]">{item.title}</h3>
                      <h6 className="text-sm">Quantity: {item.quantity} Pcs</h6>
                      <h6 className="text-sm">
                        {item.availability ? "Available" : "Not Available"}
                      </h6>
                    </div>
                  </div>
                  {/* Delete button to remove item from cart */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.uuid))}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition duration-150 ease-in-out"
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </AccordionTrigger>

                {/* Accordion Content with pricing details */}
                <AccordionContent className="flex flex-col gap-2 px-3 py-2 border-b-2">
                  <div className="flex justify-between">
                    <h2>Sub Total</h2>
                    <h2>{Math.round(item.price * item.quantity)}</h2>
                  </div>
                  <div className="flex justify-between">
                    <h2>Delivery Charges</h2>
                    <h2>
                      {item.delivery_charges
                        ? item.delivery_charges
                        : "Free Delivery"}
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <h2>Discounted Price</h2>
                    {item.discount
                      ? typeof item.discount === "string" &&
                        item.discount.includes("%")
                        ? Math.round(
                            (Number(item.price) * Number(item.discount)) / 100
                          ) * item.quantity
                        : typeof item.discount === "number"
                          ? Math.round(
                              (Number(item.price) * Number(item.discount)) / 100
                            ) * item.quantity
                          : "0"
                      : "0"}
                  </div>
                  <div className="flex justify-between text-lg pb-3 border-b-2">
                    <h2>Total</h2>
                    <h2>{Math.round(calculateTotal(item))}</h2>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Overall Total */}
        <div className="flex justify-between text-xl pb-3 border-b-2 px-3 my-5 shadow-xl items-center text-black font-bold">
          <h2>Total</h2>
          <h2>{Math.round(totalAmount)}</h2>
        </div>

        {/* Button to proceed to payment */}
        <Button
          title="Proceed to Payment"
          width="w-full"
          xpadding="px-10"
          ypadding="py-2"
          rounded="rounded-md"
          onClick={() => setIsCheckout(true)}
        />
      </div>

      {/* Payment Section appears only after clicking "Proceed to Payment" */}
      {/* Payment Section */}
      {isCheckout && (
        <div className="w-2/3 bg-white border-2 rounded-md p-4 transition-all duration-300">
          {/* Pass the collected formData here */}
          <StripePayment amount={totalAmount} />
        </div>
      )}
    </div>
  );
};

export default CheckOutCard;
