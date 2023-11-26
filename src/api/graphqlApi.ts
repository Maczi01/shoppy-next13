import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphQLQuery = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	const res = await fetch(
		"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clihaom3j03ep01te1dg24yp5/master",
		{
			method: "POST",
			body: JSON.stringify({
				query,
				variables,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;
	if (graphqlResponse.errors)
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		throw TypeError(`GraphQL error, error message: ${graphqlResponse?.errors[0]?.message}`, {
			cause: graphqlResponse.errors,
		});

	return graphqlResponse.data;
};
