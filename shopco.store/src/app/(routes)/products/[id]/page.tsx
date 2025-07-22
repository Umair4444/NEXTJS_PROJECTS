"use client";
import { notFound } from "next/navigation";
import { getProductById } from "@/dummyData/products";
import { useSanityStore } from "@/hooks/useSanityStore";
import { useEffect } from "react";
import ProductDetailCard from "@/components/(cards)/ProductDetailCard";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // // FOR FETCHING DATA FROM DUMMYDATA FILR WORKS OFFLINE
  // const productfind = getProductById(params.id);

  const { products, fetchAll } = useSanityStore();
  useEffect(() => {
    fetchAll(); // Fetch all data on mount
  }, []);

  const productfind = products.find((product) => product.slug == params.id);

  if (!productfind) {
    notFound();
  }

  return <ProductDetailCard product={productfind} />;
}
