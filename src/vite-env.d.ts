/// <reference types="vite/client" />

interface X {
	className?: string;
	children?: ReactNode;
}

declare namespace JSX {
	interface IntrinsicElements {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[element: string]: any;
	}
}
