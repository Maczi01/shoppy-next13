import React, { Suspense } from "react";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { SingleProduct } from "@/ui/organisms/SingleProduct";
import { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products/" + params.productId);
	const product = (await res.json()) as { title: string; description: string };

	return {
		title: product.title,
		description: product.description,
	};
}

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
