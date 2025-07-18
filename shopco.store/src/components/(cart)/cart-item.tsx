"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Trash2, Minus, Plus } from "lucide-react";

const CartItem = ({ item }: any) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div
      key={item.id}
      className="flex gap-4 p-4 border border-gray-200 rounded-lg"
    >
      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            {
              <p className="text-sm text-gray-600">
                Size: {item.size || "Any"}
              </p>
            }
            {
              <p className="text-sm text-gray-600">
                Color: {item.color || "Any"}
              </p>
            }
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeItem(item.id, item.size, item.color)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${item.price}</span>
            {item.originalPrice && (
              <span className="text-gray-400 line-through">
                ${item.originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center border rounded-full">
            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  Math.max(1, item.quantity - 1),
                  item.size,
                  item.color
                )
              }
              className="p-2 hover:bg-gray-100 rounded-l-full"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2 font-semibold">{item.quantity}</span>
            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity + 1,
                  item.size,
                  item.color
                )
              }
              className="p-2 hover:bg-gray-100 rounded-r-full"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
