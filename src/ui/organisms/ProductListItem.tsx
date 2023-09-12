import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = () => {
	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<ProductListItem
				product={{
					name: "Koszulka",
					category: "Odzież",
					price: 99.99,
					coverImage: {
						src: "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
						alt: "Koszulka",
					},
				}}
			/>
		</ul>
	);
};
