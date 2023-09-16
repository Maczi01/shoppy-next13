"use client";

import { useState } from "react";

export const ProductCounter = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button className="border border-slate-50 px-4" onClick={() => setCount((prev) => prev - 1)}>
				-
			</button>
			<input value={count} readOnly className="border border-slate-50 text-black" />
			<button className="border border-slate-50 px-4" onClick={() => setCount((prev) => prev + 1)}>
				+
			</button>
		</div>
	);
};
