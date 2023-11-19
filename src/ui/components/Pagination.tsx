import { ActiveLink } from "@/ui/components/ActiveLink";

export const Pagination = () => {
	const pages = [1, 2, 3, 4, 5];
	return (
		<div className="my-4 flex items-center justify-center" aria-label="pagination">
			{pages.map((page) => {
				return (
					<ActiveLink
						key={page}
						href={`http://localhost:3000/products/${page}`}
						className="border border-black  bg-amber-200 px-4 py-2 font-bold text-black hover:bg-black hover:text-amber-200"
						activeClassName="border border-rose bg-sky-200 px-4 py- font-bold text-black hover:bg-black hover:text-sky-200"
					>
						{page}
					</ActiveLink>
				);
			})}
		</div>
	);
};
