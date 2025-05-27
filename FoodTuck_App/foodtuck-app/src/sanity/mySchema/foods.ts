const food = {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Food Name",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description:
        "Category of the food item (e.g., Burger, Sandwich, Drink, etc.)",
    },
    {
      name: "price",
      type: "number",
      title: "Current Price",
    },
    {
      name: "discount",
      type: "number",
      title: "Discount",
      description: "What discount are you oferring?",
    },
    {
      name: "mealoftheday",
      title: "Meal of the Day",
      type: "string",
      options: {
        list: [
          { title: "Breakfast", value: "breakfast" },
          { title: "Lunch", value: "lunch" },
          { title: "Dinner", value: "dinner" },
          { title: "Snack", value: "snack" },
          { title: "Soup", value: "soup" },
          { title: "Drinks", value: "drinks" },
          { title: "Dessert", value: "dessert" },
        ],
        layout: "dropdown", // Optional: makes it a selection
      },
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "toppings",
      type: "array",
      title: "Toppings",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "flavors",
      type: "array",
      title: "Flavors",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    },
    {
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    },
  ],
};

export default food;
