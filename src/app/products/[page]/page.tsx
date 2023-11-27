import { notFound } from "next/navigation";
import { Pagination } from "@/ui/components/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/getProductsList";

export default async function Products() {
	const products = await getProductsList();

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
