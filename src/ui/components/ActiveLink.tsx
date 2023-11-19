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
	className = "mr-4 mt-4 text-amber-200",
	activeClassName = "mr-4 mt-4  text-amber-200 hover:text-amber-400 underline",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) && pathname.length === href.length;

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
