import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import { SingleProduct } from "@/ui/organisms/SingleProduct";
import { getProductById, getSuggestedProducts } from "@/api/getProductsList";

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> {
// 	const res = await fetch(`${URL}/${params.productId}`);
// 	const product = (await res.json()) as { title: string; description: string };
//
// 	return {
// 		title: product.title,
// 		description: product.description,
// 	};
// }

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products
// 		.map((product) => ({
// 			productId: product.id,
// 		}))
// 		.slice(0, 5);
// };

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		notFound();
	}
	const slug = product?.categories[0]?.slug;
	const suggestedProducts = await getSuggestedProducts({ slug });
	return (
		<div
			className="flex min-h-screen
		 flex-col items-center justify-center bg-black text-amber-200"
		>
			<SingleProduct {...product} />
			<aside>
				<Suspense>
					<SuggestedProductsList products={suggestedProducts} />
				</Suspense>
			</aside>
		</div>
	);
}
