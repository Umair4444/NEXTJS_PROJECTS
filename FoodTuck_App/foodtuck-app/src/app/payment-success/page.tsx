"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Define the Order interface matching your API's structure.
interface Order {
  orderid: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  address1: string;
  billingSameAsShipping: string;
}

const PaymentSuccessPage = () => {
  // Get query parameters using Next.js navigation hooks
  const searchParams = useSearchParams();
  // Extract the "amount" parameter (it will be a string)
  const amount = searchParams.get("amount");

  // Local state to store the orders
  const [orders, setOrders] = useState<Order[]>([]);
  // Loading and error states for feedback
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch order data on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/payment-intent");
        const data = await res.json();
        // Assume the API returns an object with an "orderList" property
        setOrders(data.orderList);
      } catch (err: any) {
        setError(err.message || "Error fetching orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Show loading or error messages if needed
  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="text-center w-full p-6">
      <h1 className="text-3xl text-green-500 mb-8">
        Thank you for purchasing your total bill is ${amount}
      </h1>
      {orders.map((order) => (
        <div
          className="grid grid-cols-2 text-white border p-4 my-4 rounded-lg"
          key={order.orderid}
        >
          <h2 className="text-2xl font-semibold">Order ID: {order.orderid}</h2>
          <p>First Name: {order.firstName || "unknown"}</p>
          <p>Last Name: {order.lastName}</p>
          <p>E-mail: {order.email}</p>
          <p>Phone Number: {order.phoneNumber}</p>
          <p>Country: {order.country}</p>
          <p>City: {order.city}</p>
          <p>Address: {order.address1}</p>
        </div>
      ))}
    </div>
  );
};

export default PaymentSuccessPage;
