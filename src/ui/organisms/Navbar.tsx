import { ActiveLink } from "@/ui/components/ActiveLink";

export const Navbar = () => {
	return (
		<nav className="border-bottom border-amber-200-200 flex flex-wrap items-center justify-between border-b bg-black p-6">
			<div className="mr-6 flex flex-shrink-0 items-center text-amber-200">
				<span className="text-xl font-semibold tracking-tight">Next Shop</span>
			</div>
			<div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
				<div className="text-sm lg:flex-grow">
					<ActiveLink href={"/"}>Home</ActiveLink>
					<ActiveLink exact={false} href={"/products"}>
						All
					</ActiveLink>
				</div>
				<div>
					<a
						href="/"
						className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-amber-500 lg:mt-0"
					>
						Basket
					</a>
				</div>
			</div>
		</nav>
	);
};
