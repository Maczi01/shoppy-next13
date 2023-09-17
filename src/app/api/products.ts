import type { ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

type Rating = {
	rate: number;
	count: number;
};
export const getProductsList = async (): Promise<ProductItemType[]> => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem;
	return productsResponse.map(
		(product): ProductItemType => ({
			id: product.id,
			name: product.title,
			price: product.price,
			category: product.category,
			coverImage: {
				alt: product.title,
				src: product.image,
			},
		}),
	);
};
