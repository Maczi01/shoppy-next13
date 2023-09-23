import React, { Suspense } from "react";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { SingleProduct } from "@/ui/organisms/SingleProduct";

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-black text-amber-200">
			<SingleProduct product={product} />
			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</div>
	);
}
