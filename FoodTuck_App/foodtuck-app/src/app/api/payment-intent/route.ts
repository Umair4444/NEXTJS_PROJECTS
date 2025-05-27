import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

interface OrderInfo {
  orderid: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  company?: string;
  country: string;
  city: string;
  zipCode?: number;
  address1: string;
  address2?: string;
  billingSameAsShipping: boolean;
}

// In-memory order list (for demonstration purposes)
const orderList: OrderInfo[] = [];
let orderid = 1;

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await request.json();
    console.log("Received Payment Request:", body);
    console.log("Received Payment Request formData:", body.formData);

    // Extract amount and formData from the request body
    const { amount, formData } = body;

    // Destructure required fields from the formData
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      address1,
      billingSameAsShipping,
    } = formData;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !country ||
      !city ||
      !address1
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a PaymentIntent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: { ...formData },
    });
    console.log("Metadata being sent:", formData);

    // Create a new order entry (for demo purposes)
    const newOrder: OrderInfo = {
      orderid: orderid++,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      address1,
      billingSameAsShipping,
    };

    // Add the new order to the in-memory list
    console.log("newOrder", newOrder);

    orderList.push(newOrder);

    // Return the clientSecret and orderId to the client
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      orderId: newOrder.orderid,
      order: newOrder,
      orderList,
    });
  } catch (err: any) {
    console.error("Stripe API Error:", err);
    return NextResponse.json(
      { error: err?.message || "Payment processing failed" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all orders (for testing/demo)
export async function GET() {
  return NextResponse.json({ orderList });
}
