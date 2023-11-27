import Link from "next/link";
import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/components/ProductListItemDescription";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const ProductListItem = (props: ProductListItemFragmentFragment) => {
	const { images, id, name, categories, price } = props;
	return (
		<li className="border-amber-50">
			<Link href={`/product/${id}`}>
				<article>
					{images[0] && <ProductCoverImage src={images[0].url ?? ""} alt={name} />}
					<ProductListItemDescription name={name} categories={categories} price={price} />
				</article>
			</Link>
		</li>
	);
};
