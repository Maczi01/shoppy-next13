import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

export default async function Products() {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductReponseType[];

	type ProductReponseType = {
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

	const products = productsResponse.map(
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
	return <ProductList products={products} />;
}
