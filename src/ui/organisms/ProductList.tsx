import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItemType } from "@/ui/types";
import { Pagination } from "@/ui/organisms/Pagination";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<>
			<ul
				className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
			<Pagination currentPage={1} onPageChange={() => {}} totalPages={20} />
		</>
	);
};
