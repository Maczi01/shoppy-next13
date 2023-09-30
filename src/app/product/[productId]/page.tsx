import React, { Suspense } from "react";
import type { Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { SingleProduct } from "@/ui/organisms/SingleProduct";
import { URL } from "@/fixtures";
export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const res = await fetch(`${URL}/${params.productId}`);
	const product = (await res.json()) as { title: string; description: string };

	return {
		title: product.title,
		description: product.description,
	};
}

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products
		.map((product) => ({
			productId: product.id,
		}))
		.slice(0, 5);
};

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
