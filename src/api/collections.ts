import { executeGraphQLQuery } from "./graphqlApi";
import { CollectionsGetListDocument, CollectionsGetCollectionBySlugDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphQLQuery(CollectionsGetListDocument, {});
	return graphqlResponse.collections;
};

export const getCollection = async ({ slug }: { slug: string }) => {
	const graphqlResponse = await executeGraphQLQuery(CollectionsGetCollectionBySlugDocument, {
		slug,
	});
	console.log(typeof graphqlResponse);

	return graphqlResponse.collections;
};
