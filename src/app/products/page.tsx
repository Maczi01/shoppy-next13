import { ProductList } from "@/ui/organisms/ProductList";
import { products } from "@/fixtures";

export default function Products() {
	return <ProductList products={products} />;
}
