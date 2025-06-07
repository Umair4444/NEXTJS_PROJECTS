// "use client";

// import convertToSubCurrency from "@/lib/ConverttoSubCurrency";
// import CheckoutPage from "@/components/Cart/CheckoutPage";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
//   throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// const StripePayment = () => {
//   const amount = 49.99;
//   return (
//     <div>
//       <h1 className="text-6xl font-bold text-center">
//         Ali Jawwad has requested $ {amount}
//       </h1>

//       <Elements
//         stripe={stripePromise}
//         options={{
//           mode: "payment",
//           amount: convertToSubCurrency(amount),
//           currency: "usd",
//         }}
//       >
//         <CheckoutPage amount={amount} />
//       </Elements>
//     </div>
//   );
// };

// export default StripePayment;

"use client";

import convertToSubCurrency from "@/components/Cart/ConverttoSubCurrency";
import StripeCheckOut from "./StripeCheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const StripePayment = ({ amount }: { amount: number }) => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full">
        <h2 className="text-2xl font-bold text-black text-center mb-4">
          Secure Payment
        </h2>
        <div className="bg-yellow-400 text-black font-semibold text-lg p-4 rounded-lg text-center mb-6">
          Total Bill: ${amount}
        </div>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubCurrency(amount),
            currency: "usd",
          }}
        >
          {/* Your shipping form */}
          <CheckOutForm />

          {/* Your payment element */}
          <StripeCheckOut amount={amount} />
        </Elements>
      </div>
    </div>
  );
};

export default StripePayment;
