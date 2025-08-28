import React from "react";

const CustomerPolicy = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">
                For all orders over Rp 2,000,000
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                90 day return policy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                100% secure payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPolicy;
