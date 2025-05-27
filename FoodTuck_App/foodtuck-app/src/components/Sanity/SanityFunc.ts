import { serverClient } from "@/sanity/lib/serverClient";

const uploadImage = async (file: File): Promise<string | null> => {
  try {
    const imageAsset = await serverClient.assets.upload("image", file);
    return imageAsset._id;
  } catch (error) {
    console.error("❌ Image upload failed:", error);
    throw new Error("Image upload failed.");
  }
};

export const createFoodItem = async (foodData: any): Promise<void> => {
  try {
    // Step 1: Upload the image and get the image ID
    const imageId = await uploadImage(foodData.image);
    if (!imageId) {
      throw new Error("Image upload failed.");
    }

    // Step 2: Prepare the slug (ensure it's always valid)
    const slug = foodData.title
      ? foodData.title.toLowerCase().replace(/\s+/g, "-")
      : `food-${Date.now()}`;

    // Step 3: Create food item in Sanity
    const response = await serverClient.create({
      _type: "food",
      title: foodData.title,
      slug: { _type: "slug", current: slug },
      category: foodData.category,
      price: foodData.price,
      discount: foodData.discount,
      tags: foodData.tags,
      toppings: foodData.toppings,
      flavors: foodData.flavors,
      description: foodData.description,
      available: foodData.available,
      image: { _type: "image", asset: { _ref: imageId } },
    });

    console.log("✅ Food item created:", response);
  } catch (error) {
    console.error("❌ Error creating food item:", error);
    throw new Error("Error creating food item in Sanity.");
  }
};
