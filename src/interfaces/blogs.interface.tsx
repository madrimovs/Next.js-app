export interface BlogsType {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	image: {
		url: string;
	};
	author: {
		name: string;
		avatar: {
			url: string;
		};
	};
	category: {
		label: string;
		slug: string;
	};
}
