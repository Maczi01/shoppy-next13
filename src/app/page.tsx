import { ProductList } from "@/ui/organisms/ProductList";
import { products } from "@/fixtures";

export default function Home() {
	return (
		<section className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
			<ProductList products={products} />
		</section>
	);
}
