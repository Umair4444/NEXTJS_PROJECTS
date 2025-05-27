"use client";
import { useState } from "react";
import { createFoodItem } from "./SanityFunc";
import { ToastContainer, toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa"; // For loading spinner

export default function Form() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [toppings, setToppings] = useState<string[]>([]);
  const [flavors, setFlavors] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!title || !category || !price || !description || !image) {
      setError("Please fill all required fields and upload an image.");
      return;
    }

    // Optional: Validate price and discount to be positive
    if (parseFloat(price) <= 0) {
      setError("Price must be a positive number.");
      return;
    }
    if (parseFloat(discount) < 0) {
      setError("Discount cannot be negative.");
      return;
    }

    // Validate the file type and size
    if (image && !image.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }
    if (image && image.size > 5 * 1024 * 1024) {
      // Limit size to 5MB
      setError("File size should not exceed 5MB.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await createFoodItem({
        title,
        category,
        price: parseFloat(price),
        discount: parseFloat(discount) || 0,
        tags,
        toppings,
        flavors,
        description,
        available,
        image,
      });
      setSuccess(true);

      // Notify the user
      toast.success("Added to Sanity Studio Successfully!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      // Reset form
      setTitle("");
      setCategory("");
      setPrice("");
      setDiscount("");
      setTags([]);
      setToppings([]);
      setFlavors([]);
      setImage(null);
      setDescription("");
      setAvailable(true);
    } catch (err) {
      setError("Failed to upload food item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Upload Food Item
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Name
          </label>
          <input
            type="text"
            placeholder="Enter food name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount (optional)
          </label>
          <input
            type="number"
            placeholder="Enter discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            placeholder="e.g., spicy, vegan, gluten-free"
            onBlur={(e) => setTags(e.target.value.split(","))}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Toppings */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Toppings (comma-separated)
          </label>
          <input
            type="text"
            placeholder="e.g., cheese, olives, mushrooms"
            onBlur={(e) => setToppings(e.target.value.split(","))}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Flavors */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Flavors (comma-separated)
          </label>
          <input
            type="text"
            placeholder="e.g., sweet, sour, salty"
            onBlur={(e) => setFlavors(e.target.value.split(","))}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
        </div>

        {/* Availability */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">Available</label>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              Submitting...
              <FaSpinner className="animate-spin" />
            </span>
          ) : (
            "Submit"
          )}
        </button>

        {/* Error and Success Messages */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-sm text-center mt-4">
            Food item uploaded successfully!
          </p>
        )}
      </form>
      <ToastContainer />
    </div>
  );
}
