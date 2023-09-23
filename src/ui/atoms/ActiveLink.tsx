"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import type { Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	children,
	className = "mr-4 mt-4 text-amber-200",
	activeClassName = "mr-4 mt-4  text-amber-200 hover:text-amber-400 underline",
}: {
	href: Route<T> | URL;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	console.log({ pathname });
	const isActive = pathname === href;
	console.log({ href });
	const styles = isActive ? activeClassName : className;

	// const matchedPath = (typeof href === "string" ? href : href.pathname) ?? null;
	// const isActive =
	// 	(matchedPath &&
	// 		pathname &&
	// 		(exact ? pathname === matchedPath : pathname.startsWith(matchedPath))) ||
	// 	false;

	return (
		<Link href={href} className={styles}>
			{children}
		</Link>
	);
};
