import type { ProductItemType } from "@/ui/types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const SingleProduct = ({ product }: { product: ProductItemType }) => {
	return (
		<>
			<article className="flex min-h-screen flex-col items-center justify-center bg-black text-amber-200">
				<h1 className="text-4xl font-bold">Single Product Page</h1>
				<span className="ml-4 text-2xl font-bold">{product.name}</span>
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductListItemDescription product={product} />
			</article>
		</>
	);
};
