import React from "react";
import { getCollection } from "@/api/collections";
import { ProductList } from "@/ui/organisms/ProductList";

const CollectionPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	console.log("slug", slug);
	const collection = await getCollection({
		slug,
	});

	const products = collection[0]?.products;
	if (products?.length === 0) {
		return <div className="text-center">Not founds any products</div>;
	}

	return (
		<>
			<h2>name is {collection[0]?.name}</h2>
			<ProductList products={products || []} />
		</>
	);
};

export default CollectionPage;
