"use client";
import { useParams } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function Products() {
	const { page } = useParams();
	const pageParameter = Array.isArray(page) ? page[0] : page;
	const products = await getProductsList(parseInt(pageParameter));
	return (
		<div className="flex flex-col items-center justify-center">
			<Pagination />
			<ProductList products={products} />
		</div>
	);
}
