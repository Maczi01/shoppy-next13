import { type ProductListItemFragmentFragment } from "@/gql/graphql";
//
type ProductListItemDescriptionProps = Pick<
	ProductListItemFragmentFragment,
	"name" | "price" | "categories"
>;

export const ProductListItemDescription = ({
	name,
	price,
	categories,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm text-amber-700">{name}</h3>
				{!!categories?.length && (
					<p className="text-sm text-amber-200 ">
						<span className="sr-only">Kategoria</span> {categories[0]?.name}
					</p>
				)}
			</div>
			<p className="text-sm text-amber-900">
				<span className="sr-only">Cena</span> {price}$
			</p>
		</div>
	);
};
