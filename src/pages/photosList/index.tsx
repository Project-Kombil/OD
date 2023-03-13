// import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Photo from "./Photo";

// variable declarations for type
import { Gallery, Picture } from "../../assets/interface";

import { gallery } from "../../api/Objects";
const galleryData: Gallery = gallery;

// async function fetchData(): Promise<Gallery[]> {
// 	const response = await fetch("http://localhost:3003/api/gallery");
// 	const data = await response.json();
// 	return data.pictures;
// }

function PhotosList() {
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
			{galleryData.pictures.map((data: Picture) => (
				<Box key={data.id}>
					<Photo {...data} />
				</Box>
			))}
		</Box>
	);
}

export default PhotosList;
