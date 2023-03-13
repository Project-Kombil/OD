// import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Video from "./Video";

// variable declarations for type
import { Gallery, Video as Motion } from "../../assets/interface";

import { gallery } from "../../api/Objects";
const galleryData: Gallery = gallery;

// async function fetchData(): Promise<Gallery[]> {
// 	const response = await fetch("http://localhost:3003/api/gallery");
// 	const data = await response.json();
// 	return data.pictures;
// }

function VideosList() {
	// const [data, setData] = useState<Gallery[]>([]);

	// 	useEffect(() => {
	// 		async function getData() {
	// 			const result = await fetchData();
	// 			setData(result);
	// 		}
	// 		getData();
	// 	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "flex-start",
			}}
		>
			{galleryData.videos.map((data: Motion) => (
				<Box key={data.id}>
					<Video {...data} />
				</Box>
			))}
		</Box>
	);
}

export default VideosList;
