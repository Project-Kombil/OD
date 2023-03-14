// import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Photo from "./Photo";

// variable declarations for types
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
		<Grid container spacing={2}>
			{galleryData.pictures.map((data: Picture) => (
				<Grid item key={data.id}>
					<Photo {...data} />
				</Grid>
			))}
		</Grid>
	);
}

export default PhotosList;
