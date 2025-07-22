const getPriceRangeColor = (priceRange: string) => {
  switch (priceRange) {
    case "Budget":
      return "bg-green-100 text-green-800";
    case "Mid-Range":
      return "bg-blue-100 text-blue-800";
    case "Premium":
      return "bg-purple-100 text-purple-800";
    case "Luxury":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default getPriceRangeColor;
