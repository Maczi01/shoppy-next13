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
	return productsResponse.map(mapProductResponseItemToProductItemType);
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductItemType> => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	return mapProductResponseItemToProductItemType(productResponse);
};

const mapProductResponseItemToProductItemType = (
	productResponse: ProductResponseItem,
): ProductItemType => ({
	id: productResponse.id,
	name: productResponse.title,
	price: productResponse.price,
	category: productResponse.category,
	coverImage: {
		alt: productResponse.title,
		src: productResponse.image,
	},
});
