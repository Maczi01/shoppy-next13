import { notFound } from "next/navigation";
import { Pagination } from "@/ui/components/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/getProductsList";

export default async function Products() {
	const products = await getProductsList();
	// const { products } = await executeGraphQLQuery(GetProductsListDocument, {});
	// const mapped = products.map((product) => ({
	// 	...product,
	// 	category: product.categories[0]?.name || "",
	// 	coverImage: {
	// 		src: product?.images[0]?.url || "",
	// 		alt: product.name,
	// 	},
	// }));
	// const d = await getProductsList();

	if (!products) {
		return notFound();
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<Pagination />
			<ProductList products={products} />
		</div>
	);
}
