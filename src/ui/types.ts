export type ProductItemType = {
	id: string;
	name: string;
	category?: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};

// type ProductResponseItem = {
// 	id: string;
// 	title: string;
// 	price: number;
// 	description: string;
// 	category: string;
// 	rating: Rating;
// 	image: string;
// 	longDescription: string;
// };

// type Rating = {
// 	rate: number;
// 	count: number;
// };
