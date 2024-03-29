import { ProductListItem } from "@/ui/components/ProductListItem";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: ProductListItemFragmentFragment[] }) => {
	return (
		<div className="flex flex-col items-center justify-center bg-black text-amber-200">
			<ul
				className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => {
					return <ProductListItem key={product.id} {...product} />;
				})}
			</ul>
		</div>
	);
};
