export interface Gallery {
	name: string;
	videos: Video[];
	pictures: Picture[];
}

export interface Video {
	id: string;
	name: string;
	description: string;
	video_url: string;
}

export interface Picture {
	id: string;
	name: string;
	description: string;
	image_url: string;
}
