import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
  originalPrice?: number;
  quantity: number;
}

interface Props {
  item: CartItem;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  //   setCartItems: (
  //     value: CartItem[] | ((prev: CartItem[]) => CartItem[])
  //   ) => void;
}

const CartItemCard: React.FC<Props> = ({ item, setCartItems }) => {
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString()}`;
  };

  return (
    <Card key={item.id}>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Product Image & Info */}
          <div className="md:col-span-2 flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="space-y-1">
              <Link href={`/product/${item.id}`}>
                <h3 className="font-semibold text-foreground hover:text-muted-foreground">
                  {item.name}
                </h3>
              </Link>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>Size: {item.size}</span>
                <span>Color: {item.color}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">
                  {formatPrice(item.price)}
                </span>
                {item.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(item.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center">
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2 hover:bg-muted transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 min-w-16 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 hover:bg-muted transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Subtotal & Remove */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground">
              {formatPrice(item.price * item.quantity)}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
