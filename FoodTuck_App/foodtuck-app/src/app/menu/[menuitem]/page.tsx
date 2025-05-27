"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus, FaCartPlus, FaHeart } from "react-icons/fa"; // Added cart and heart icons
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/Redux-toolkit/feature/cartSlice";
import { AppDispatch, RootState } from "@/app/Redux-toolkit/store";
import { fetchProducts } from "@/app/Redux-toolkit/feature/productSlice";
import { IProduct } from "@/app/utils/Types";
import { addToWish } from "@/app/Redux-toolkit/feature/wishSlice";
import { ToastContainer, toast } from "react-toastify";
import loading from "@/assets/loading.jpg";

const Page = ({ params }: { params: { menuitem: string } }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Find the product dynamically after products are fetched
  const find: IProduct | undefined = products.find(
    (item: IProduct) => item.slug === params.menuitem
  );

  // Local state for cart item
  const [cartItem, setCartItem] = useState<any | null>(null);

  useEffect(() => {
    if (find) {
      setCartItem({
        id: find.id,
        title: find.title,
        image: find.image || loading, // Use fallback image if missing
        slug: find.slug,
        price: find.price,
        category: find.category,
        description: find.description,
        flavors: find.flavors,
        topping: find.toppings,
        quantity: 1,
        discount: find.discount,
        availability: find.available ? "Available" : "Not Available",
        uuid: find.uuid,
      });
    }
  }, [find]);

  if (status === "loading")
    return <p className="text-lg text-gray-400">Loading...</p>;
  if (status === "failed")
    return <p className="text-lg text-red-500">Error: {error}</p>;
  if (!find) return <h1 className="text-xl font-semibold">No Product Found</h1>;

  const notify = () => toast("Added Successfully!!");

  const handleAddToCart = () => {
    if (cartItem) {
      dispatch(addToCart(cartItem)); // Add item to the cart
      setCartItem({ ...cartItem, quantity: 1 }); // Reset the quantity

      toast.success("Added to Cart Succesfully!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleWishItem = () => {
    if (cartItem) {
      dispatch(addToWish(cartItem)); // Add item to wishlist
    }
    toast.success("Added to Wishlist Succesfully!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="bg-white pt-4 pb-32 px-4 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 transform transition-transform duration-300 hover:scale-95">
          {/* Product Image */}
          <div className="relative w-full h-[23rem]  lg:w-1/3 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={cartItem?.image || loading} // Fallback to default image
              alt={cartItem?.title || "Product Image"}
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              {cartItem?.title}
            </h2>
            <p className="text-sm text-gray-300">{cartItem?.description}</p>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-base text-yellow-500 font-semibold">
                  Category:{" "}
                </span>
                <span className="text-sm text-white">{cartItem?.category}</span>
              </div>
              <div>
                <span className="text-base text-yellow-500 font-semibold">
                  Price:{" "}
                </span>
                <span className="text-xl font-bold text-white">
                  ${cartItem?.price}
                </span>
              </div>
            </div>

            {/* Extras */}
            <div>
              <h3 className="text-sm font-semibold text-white">Extras:</h3>
              {Array.isArray(cartItem?.topping) &&
              cartItem?.topping.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-2">
                  {cartItem?.topping.map((topping: string, index: number) => (
                    <span
                      key={index}
                      className="bg-yellow-500 text-black py-1 px-3 rounded-full text-xs font-semibold"
                    >
                      {topping}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-2 text-gray-500">No Extra Items</div>
              )}
            </div>

            {/* Quantity and Price */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      quantity: Math.max(cartItem.quantity - 1, 1),
                    })
                  }
                  className="bg-yellow-500 hover:text-black text-white p-2 rounded-full"
                >
                  <FaMinus />
                </button>
                <span className="mx-4 text-lg font-semibold text-white">
                  {cartItem?.quantity || 1}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      quantity: (cartItem?.quantity || 1) + 1,
                    })
                  }
                  className="bg-yellow-500 hover:text-black text-white p-2 rounded-full"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Price */}
              <div className="flex flex-col items-end">
                <span className="text-xl font-bold text-white">
                  ${cartItem?.price}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 mb-4 sm:mb-0"
                aria-label="Add to cart"
              >
                <FaCartPlus />
                <span>Add to Cart</span>
              </button>

              {/* Add to Wishlist Button */}
              <button
                onClick={handleWishItem}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                aria-label="Add to wishlist"
              >
                <FaHeart />
                <span>Add to Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
