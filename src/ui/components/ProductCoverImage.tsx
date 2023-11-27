import NextImage from "next/image";

export const ProductCoverImage = ({ alt, src }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<NextImage
				width={200}
				height={100}
				alt={alt}
				src={src}
				className="p4 h-full w-full object-cover object-center transition-transform hover:scale-105"
			/>
		</div>
	);
};
