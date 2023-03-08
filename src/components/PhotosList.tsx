// import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Photo from "./SingeView/Photo";
// import { Gallery, Video, Picture } from "../assets/Interface";

import { gallery } from "../assets/Objects";
const galleryData: any = gallery;

// async function fetchData(): Promise<Gallery[]> {
// 	const response = await fetch("http://localhost:3003/api/gallery");
// 	const data = await response.json();
// 	return data.pictures;
// }

function PhotosList(): JSX.Element {
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
				flexDirection: "column",
				justifyContent: "center",
				p: 1,
				m: 1,
			}}
		>
			{galleryData.pictures.map((item: any) => (
				<Box key={item.id}>
					<Photo props={item} />
				</Box>
			))}
		</Box>
	);
}

export default PhotosList;
