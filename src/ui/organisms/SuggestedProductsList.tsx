import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const SuggestedProductsList = async () => {
	const products = await getProductsList();
	await sleep(3100);
	return <ProductList products={products.slice(-4)} />;
};
