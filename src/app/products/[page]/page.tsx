import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function Products({ params }: { params: { page: string } }) {
	const products = await getProductsList(parseInt(params.page));
	return (
		<div className="flex flex-col items-center justify-center">
			<Pagination />
			<ProductList products={products} />
		</div>
	);
}
