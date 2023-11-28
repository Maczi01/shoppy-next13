import { ProductCoverImage } from "@/ui/components/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/components/ProductListItemDescription";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type SingleProductProps = ProductListItemFragmentFragment & {
	colors?: { name: string }[];
	sizes?: { name: string }[];
};

export const SingleProduct = ({
	name,
	price,
	categories,
	images,
	colors,
	sizes,
}: SingleProductProps) => {
	console.log({ colors });
	return (
		<>
			<article className="flex min-h-screen flex-col items-center justify-center bg-black text-amber-200">
				<h1 className="text-4xl font-bold">Single Product Page</h1>
				<span className="ml-4 text-2xl font-bold">{name}</span>
				{!!images?.length && <ProductCoverImage src={images[0]?.url || ""} alt={name} />}
				<ProductListItemDescription name={name} categories={categories} price={price} />
				<select name="" id="" className="text-black">
					{colors?.map((color) => (
						<option key={color.name} value={color.name}>
							{color.name}
						</option>
					))}
				</select>
				<select name="" id="" className="text-black">
					{sizes?.map((size) => (
						<option key={size.name} value={size.name}>
							{size.name}
						</option>
					))}
				</select>
			</article>
		</>
	);
};
