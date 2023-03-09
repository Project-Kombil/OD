// import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Video from "./SingeView/Video";
// import { Gallery, Video as Motion, Picture } from "../assets/Interface";

import { gallery } from "../assets/Objects";
const galleryData: any = gallery;

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
			{galleryData.videos.map((item: any) => (
				<Box key={item.id}>
					<Video props={item} />
				</Box>
			))}
		</Box>
	);
}

export default VideosList;
