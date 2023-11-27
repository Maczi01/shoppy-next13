import { ActiveLink } from "@/ui/components/ActiveLink";

export const Navbar = () => {
	return (
		<nav className="border-bottom border-amber-200-200 flex flex-wrap items-center justify-between border-b bg-white p-6">
			<div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
				<div className="text-sm lg:flex-grow">
					<ActiveLink href={"/"} exact>
						Home
					</ActiveLink>
					<ActiveLink href={"/products"}>All</ActiveLink>
					<ActiveLink href={"/categories/hoodies"}>Hoodies</ActiveLink>
					<ActiveLink href={"/categories/t-shirts"}>T-shirts</ActiveLink>
					<ActiveLink href={"/collections"}>Collections</ActiveLink>
				</div>
				<div>
					<ActiveLink href="/">Basket</ActiveLink>
				</div>
			</div>
		</nav>
	);
};
