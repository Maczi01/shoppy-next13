import Link from "next/link";
import { getCollections } from "@/api/collections";
import { ProductCoverImage } from "@/ui/components/ProductCoverImage";

const CollectionsPage = async () => {
	const collections = await getCollections();
	return (
		<div data-testid="collections">
			<ul>
				{collections.map((collection) => (
					<li key={collection.id}>
						<ProductCoverImage
							src={collection.products[0]?.images[0]?.url || ""}
							alt={collection.name}
						/>
						<Link
							href={`/collections/${collection.slug.toLocaleLowerCase()}`}
							className="text-blue-400 hover:underline"
						>
							{collection.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CollectionsPage;
