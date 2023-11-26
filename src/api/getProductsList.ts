import { executeGraphQLQuery } from "@/api/graphqlApi";
import {
	GetProductsListDocument,
	ProductGetByIdDocument,
	type ProductListItemFragmentFragment,
} from "@/gql/graphql";

export const getProductsList = async (): Promise<ProductListItemFragmentFragment[]> => {
	// 	...product,
	// 	category: product.categories[0]?.name || "",
	// 	coverImage: {
	// 		src: product?.images[0]?.url || "",
	// 		alt: product.name,
	// 	},
	// }));
	const { products } = await executeGraphQLQuery(GetProductsListDocument, {});
	return products;
};

export const getProductById = async (
	id: string,
): Promise<ProductListItemFragmentFragment | null | undefined> => {
	const { product } = await executeGraphQLQuery(ProductGetByIdDocument, {
		id,
	});
	return product;
};

// export const getProductsListByCategorySlug = async (
// 	category: string,
// 	limit: number,
// 	offset: number,
// ) => {
// 	const graphqlResponse = await executeGraphQLQuery(ProductsByCategorySlug, {
// 		slag: category,
// 		limit,
// 		offset,
// 	});
//
// 	return graphqlResponse.productsConnection;
// };
