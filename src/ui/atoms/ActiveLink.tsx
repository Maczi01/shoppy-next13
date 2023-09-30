"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";

// type ActiveLinkProps<T extends string> = {
// 	href: Route<T>;
// 	children: ReactNode;
// 	exact?: boolean;
// 	className?: string;
// 	activeClassName?: string;
// };
// type ActiveLinkProps<Href> = {
// 	activeClassName: string;
// 	className?: string;
// 	exact?: boolean;
// 	children: React.ReactNode;
// } & LinkProps<Href>;
//
// export const ActiveLink = <T extends string>({
// 	href,
// 	children,
// 	className = "mr-4 mt-4 text-amber-200",
// 	activeClassName = "mr-4 mt-4  text-amber-200 hover:text-amber-400 underline",
// 	exact = true,
// }: ActiveLinkProps<T>) => {
// 	const pathname = usePathname();
// 	const stringifiedHref = href.toString();
// 	const isActive = exact
// 		? pathname === href
// 		: pathname.startsWith(href) &&
// 		  (pathname[href.length] === "/" || pathname.length === href.length);
//
// 	return isActive ? (
// 		<Link href={href} className={`${className} ${isActive && activeClassName}`} aria-current>
// 			{children}
// 		</Link>
// 	) : (
// 		<Link href={href} className={`${className} ${isActive && activeClassName}`}>
// 			{children}
// 		</Link>
// 	);
// };
//
//
// "use client";
// import Link from "next/link";
// import React from "react";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
// import type { Route } from "next";
//
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
	className = "mr-4 mt-4 text-amber-200",
	activeClassName = "mr-4 mt-4  text-amber-200 hover:text-amber-400 underline",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) && pathname.length === href.length;

	console.log(pathname, href, isActive);

	// return (
	// 	<Link
	// 		href={href}
	// 		prefetch={true}
	// 		className={clsx(
	// 			flex h-full w-full min-w-[3rem] items-center justify-center px-1 pt-1 text-center text-sm font-medium border-b-2,
	// 			isActive ? activeClassName : className
	// 			)}
	// 	>
	// 		{children}
	// 	</Link>
	// );
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
