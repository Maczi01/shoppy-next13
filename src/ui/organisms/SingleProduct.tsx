import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/components/ProductListItemDescription";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const SingleProduct = ({
	name,
	price,
	categories,
	images,
}: ProductListItemFragmentFragment) => {
	console.log("SingleProduct", name, price, categories, images);
	return (
		<>
			<article className="flex min-h-screen flex-col items-center justify-center bg-black text-amber-200">
				<h1 className="text-4xl font-bold">Single Product Page</h1>
				<span className="ml-4 text-2xl font-bold">{name}</span>
				{!!images?.length && <ProductCoverImage src={images[0]?.url || ""} alt={name} />}
				<ProductListItemDescription name={name} categories={categories} price={price} />
			</article>
		</>
	);
};
