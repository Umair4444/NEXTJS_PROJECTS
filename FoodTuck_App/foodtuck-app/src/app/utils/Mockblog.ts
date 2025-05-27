import { IBlog } from "./Types";

export const mockBlogs: IBlog[] = [
  {
    id: "1",
    title: "The Art of French Pastries",
    slug: "art-of-french-pastries",
    content:
      "French pastries are known for their delicate textures and rich flavors. In this blog, we dive into the techniques and ingredients that make these treats irresistible. From laminating dough for croissants to mastering the glossy sheen of a chocolate éclair, every step is crucial. We also interview Chef Pierre LaRue, who shares his tips for beginners and reveals the history behind some iconic pastries.",
    summary:
      "Discover the secrets behind perfect croissants, éclairs, and macarons.",
    author: "Chef Pierre LaRue",
    image: "/images/french-pastries.jpg",
    tags: ["French Cuisine", "Pastries", "Baking"],
    category: "Food & Recipes",
    createdAt: "2025-01-01T10:00:00Z",
    updatedAt: "2025-01-05T15:00:00Z",
    isPublished: true,
    comments: [
      {
        id: 1,
        user: "Jane Doe",
        message:
          "I tried your croissant recipe, and it turned out amazing! Merci!",
        createdAt: "2025-01-02T08:30:00Z",
      },
    ],
  },
  {
    id: "2",
    title: "A Day in the Life of a Michelin Star Chef",
    slug: "life-of-michelin-chef",
    content:
      "The life of a Michelin-star chef is both thrilling and exhausting. Chef Maria Gonzalez starts her day at 5 AM, inspecting the freshest produce at the local market. Her kitchen is a symphony of precision, where every dish must be perfect. This blog provides a behind-the-scenes look at the dedication and creativity required to maintain culinary excellence, featuring exclusive interviews with her team.",
    summary:
      "Experience the highs and lows of running a Michelin-star kitchen.",
    author: "Chef Maria Gonzalez",
    image: "/images/michelin-chef.jpg",
    tags: ["Chefs", "Fine Dining", "Culinary Arts"],
    category: "Chefs & Culinary Arts",
    createdAt: "2025-01-10T14:00:00Z",
    isPublished: true,
    comments: [
      {
        id: 1,
        user: "Paul L.",
        message:
          "Amazing insight! I had no idea the amount of work behind the scenes.",
        createdAt: "2025-01-12T10:00:00Z",
      },
    ],
  },
  {
    id: "3",
    title: "Street Food Wonders: The Best Tacos in Mexico City",
    slug: "best-tacos-mexico-city",
    content:
      "Tacos are more than just a dish in Mexico; they’re a cultural icon. In this blog, we explore the bustling streets of Mexico City, uncovering the best taquerias. From al pastor to barbacoa, every taco tells a story. Chef Alejandro Ruiz shares his perspective on why simple ingredients can create unforgettable flavors.",
    summary:
      "Explore the vibrant world of Mexican street food with the best taco spots.",
    author: "Chef Alejandro Ruiz",
    image: "/images/mexico-tacos.jpg",
    tags: ["Street Food", "Mexican Cuisine", "Tacos"],
    category: "Food & Travel",
    createdAt: "2025-01-15T11:00:00Z",
    isPublished: true,
    comments: [
      {
        id: 1,
        user: "Anna R.",
        message:
          "I’ve been to El Califa, and it was the best taco experience of my life!",
        createdAt: "2025-01-16T13:30:00Z",
      },
    ],
  },
  {
    id: "4",
    title: "The Science Behind Perfect Pasta",
    slug: "science-behind-perfect-pasta",
    content:
      "Cooking pasta might seem simple, but perfecting it requires science and precision. Chef Luca Bianchi explains why the choice of flour matters, how to properly salt your water, and the ideal cooking time to achieve al dente perfection. This blog is a must-read for anyone who wants to elevate their pasta game.",
    summary: "Learn how to cook pasta like an Italian chef with these tips.",
    author: "Chef Luca Bianchi",
    image: "/images/pasta-tips.jpg",
    tags: ["Pasta", "Italian Cuisine", "Cooking Tips"],
    category: "Cooking Techniques",
    createdAt: "2025-01-20T08:00:00Z",
    isPublished: true,
    comments: [
      {
        id: 1,
        user: "Tom H.",
        message: "Tried these tips, and my carbonara was flawless. Thank you!",
        createdAt: "2025-01-21T11:00:00Z",
      },
    ],
  },
];

export default mockBlogs;
