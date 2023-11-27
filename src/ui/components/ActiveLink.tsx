"use client";
import { type UrlObject } from "url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T> | UrlObject;
	children: React.ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = false,
	className = "mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
	activeClassName = "mx-2 border border-blue-800 text-blue-800 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
}: ActiveLinkProps<T>) => {
	const currentPath = usePathname();
	const path = typeof href === "string" ? href : href.pathname || "";
	console.log("currentPath", currentPath);
	console.log("path", path);
	const isActive = exact
		? currentPath === path
		: currentPath.startsWith(`${path}/`) || currentPath === path;
	//
	return (
		<Link href={href} className={isActive ? className : activeClassName} aria-current>
			{children}
		</Link>
	);
};
