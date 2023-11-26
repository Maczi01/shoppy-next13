import { notFound } from "next/navigation";
import { Pagination } from "@/ui/components/Pagination";
import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { executeGraphQLQuery } from "@/api/graphqlApi";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const variables = {
		slug: params.category,
	};
	const { products } = await executeGraphQLQuery(ProductsGetByCategorySlugDocument, variables);
	if (!products) {
		return notFound();
	}
	const mapped = products?.map((product) => ({
		...product,
		category: product.categories[0]?.name || "",
		coverImage: {
			src: product?.images[0]?.url || "",
			alt: product.name,
		},
	}));

	if (!mapped) {
		return notFound();
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<p>Produkty z kategorii</p>
			<Pagination />
			<ProductList products={mapped} />
		</div>
	);
}
