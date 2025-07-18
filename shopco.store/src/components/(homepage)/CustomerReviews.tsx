import React from "react";

const CustomerReviews = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah M.",
              rating: 5,
              review:
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            },
            {
              name: "Alex K.",
              rating: 5,
              review:
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
            },
            {
              name: "James L.",
              rating: 5,
              review:
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
            },
          ].map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-yellow-400 rounded-sm mr-1"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold">{review.name}</span>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
