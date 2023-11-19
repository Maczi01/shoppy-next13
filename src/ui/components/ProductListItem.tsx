import Link from "next/link";
import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/components/ProductListItemDescription";
import type { ProductItemType } from "@/ui/types";

type ProductListItemProps = {
	product: ProductItemType;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="border-amber-50">
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
