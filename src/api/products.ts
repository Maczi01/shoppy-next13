import { URL } from "@/fixtures";
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

// export const getProductsList = async (offset: number = 1): Promise<ProductItemType[]> => {
// 	const res = await fetch(`${URL}?take=20&offset=${offset}`);
// 	const productsResponse = (await res.json()) as ProductResponseItem;
// 	return productsResponse.map(mapProductResponseItemToProductItemType).slice(0, 20);
// };
export const getProductsList = async (offset: number = 1): Promise<ProductItemType[]> => {
	try {
		const res = await fetch(`${URL}?take=20&offset=${offset}`);

		if (!res.ok) {
			throw new Error("Network response was not ok" + res.statusText);
		}

		const productsResponse = (await res.json()) as ProductResponseItem[];
		return productsResponse.map(mapProductResponseItemToProductItemType).slice(0, 20);
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
		return [];
	}
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductItemType> => {
	const res = await fetch(`${URL}/${id}`);
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
