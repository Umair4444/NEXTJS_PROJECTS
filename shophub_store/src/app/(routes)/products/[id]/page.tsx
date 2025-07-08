import { ProductDetail } from "@/components/(products)/product-detail";
import { RelatedProducts } from "@/components/(products)/related-products";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <ProductDetail productId={params.id} />
      <RelatedProducts />
    </div>
  );
}
