import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next Shop",
	description: "Best products in the web",
};
export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-black text-amber-200">
			<h1 className="text-4xl font-bold">Next shop</h1>
		</main>
	);
}
