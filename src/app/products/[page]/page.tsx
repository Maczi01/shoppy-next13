import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/graphql/utils";

// export default async function Products({ params }: { params: { page: string } }) {
export default async function Products() {
	// const products = await getProductsList(parseInt(params.page));
	const { products } = await executeGraphql(ProductsGetListDocument);

	return (
		<div className="flex flex-col items-center justify-center">
			<Pagination />
			<ProductList products={products} />
		</div>
	);
}
