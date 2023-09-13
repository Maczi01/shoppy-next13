import type { ProductItemType } from "@/ui/types";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { name, price, category },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm text-amber-700">{name}</h3>
				<p className="text-sm text-amber-200 ">
					<span className="sr-only">Kategoria</span> {category}
				</p>
			</div>
			<p className="text-sm text-amber-900">
				<span className="sr-only">Cena</span> {price}$
			</p>
		</div>
	);
};
