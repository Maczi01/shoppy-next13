export const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}) => {
	return (
		<div className="my-4 flex items-center justify-center">
			<button
				className="rounded-l bg-amber-200 px-4 py-2 font-bold text-black hover:bg-amber-400"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Prev
			</button>
			<span className="bg-amber-200 px-4 py-2 font-bold text-black">{currentPage}</span>
			<button
				className="rounded-r bg-amber-200 px-4 py-2 font-bold text-black hover:bg-amber-400"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	);
};