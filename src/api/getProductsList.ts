import { executeGraphQLQuery } from "@/api/graphqlApi";
import { GetProductsListDocument, ProductListFragmentFragment } from "@/gql/graphql";

export const getProductsList = async () => {
	// const mapped = products.map((product) => ({
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
