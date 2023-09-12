import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const ProductListItem = ({}) => {
	return (
		<li>
			<article>
				<ProductCoverImage src="/product_1.png" alt="kubek" />
				<ProductListItemDescription
					product={{
						name: "Kubek",
						price: 220,
						category: "kategoria",
					}}
				/>
			</article>
		</li>
	);
};
