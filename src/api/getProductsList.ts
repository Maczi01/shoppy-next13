import { executeGraphQLQuery } from "@/api/graphqlApi";
import {
	GetProductsListDocument,
	GetSuggestedProductsListDocument,
	ProductGetByIdDocument,
	ProductGetColorVariantListDocument,
	ProductGetSizeVariantListDocument,
	type ProductListItemFragmentFragment,
} from "@/gql/graphql";

export const getProductsList = async (): Promise<ProductListItemFragmentFragment[]> => {
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

export const getSuggestedProducts = async ({ slug }: { slug: string }) => {
	const { products } = await executeGraphQLQuery(GetSuggestedProductsListDocument, {
		slug,
	});

	return products;
};

export const getColorList = async () => {
	return executeGraphQLQuery(ProductGetColorVariantListDocument, {});
};
export const getSizeList = async () => {
	return executeGraphQLQuery(ProductGetSizeVariantListDocument, {});
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
