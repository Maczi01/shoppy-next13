import React, { Suspense } from "react";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="flex min-h-screen items-center justify-center bg-black text-amber-200">
				<h1 className="text-4xl font-bold">Single Product Page</h1>
				<span className="ml-4 text-2xl font-bold">{product.name}</span>
			</article>
			<ProductListItem product={product} />;
			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
