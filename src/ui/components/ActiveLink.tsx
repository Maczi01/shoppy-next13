"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = true,
	// className,
	// = "mr-4 mt-4 text-amber-200",
	className = "mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
	// activeClassName, // = "mr-4 mt-4  text-amber-200 hover:text-amber-400 underline",
	activeClassName = "mx-2 border border-blue-800 text-blue-800 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const linkPathname = new URL(href, window.location.origin).pathname; // Extract pathname from href

	const isActive = exact
		? pathname === linkPathname
		: pathname.startsWith(linkPathname) && pathname.length === linkPathname.length;

	console.log("isActive", isActive);
	console.log("pathname", pathname);
	// console.log("href", href);
	console.log("linkPathname", linkPathname);

	return isActive ? (
		<Link href={href} className={`${className} ${isActive && activeClassName}`} aria-current>
			{children}
		</Link>
	) : (
		<Link href={href} className={`${className} ${isActive && activeClassName}`}>
			{children}
		</Link>
	);
};
