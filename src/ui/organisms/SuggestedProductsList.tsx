import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const SuggestedProductsList = async ({
	products,
}: {
	products: ProductListItemFragmentFragment[];
}) => {
	// const products = await getProductsList();
	return (
		<div data-testid="related-products">
			<h4>Suggested Products</h4>;
			<ProductList products={products || []} />;
		</div>
	);
};
