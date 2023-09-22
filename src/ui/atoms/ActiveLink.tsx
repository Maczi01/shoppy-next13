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
	const isActive = pathname === href;
	const styles = isActive ? activeClassName : className;
	return (
		<Link href={href} className={styles}>
			{children}
		</Link>
	);
};
