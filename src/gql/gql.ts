/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CollectionsGetCollectionBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      slug\n      description\n      price\n      images {\n        url\n      }\n      categories {\n        name\n      }\n    }\n  }\n}": types.CollectionsGetCollectionBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n    products {\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query GetProductsList {\n  products {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.GetProductsListDocument,
    "query GetSuggestedProductsList($slug: String!) {\n  products(first: 4, where: {categories_some: {slug: $slug}}) {\n    id\n    name\n    description\n    slug\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.GetSuggestedProductsListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      slug\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  products(first: 10, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItemFragment\n  }\n}": types.ProductsGetByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetCollectionBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    name\n    products {\n      id\n      name\n      slug\n      description\n      price\n      images {\n        url\n      }\n      categories {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetCollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n    products {\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsList {\n  products {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').GetProductsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSuggestedProductsList($slug: String!) {\n  products(first: 4, where: {categories_some: {slug: $slug}}) {\n    id\n    name\n    description\n    slug\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').GetSuggestedProductsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      slug\n      name\n    }\n    images(first: 1) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  products(first: 10, where: {categories_some: {slug: $slug}}) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
