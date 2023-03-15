import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Photo from "./Photo";

// variable declarations for types
import { Picture } from "../../assets/interface";

async function fetchData(): Promise<Picture[]> {
	const response = await fetch("http://localhost:4000/api/gallery");
	const data = await response.json();
	return data.pictures;
}

function PhotosList() {
	const [data, setData] = useState<Picture[]>([]);

	useEffect(() => {
		async function getData() {
			const result = await fetchData();
			setData(result);
		}
		getData();
	}, []);

	return (
		<Grid container spacing={2}>
			{data.map((data: Picture) => (
				<Grid item key={data.id}>
					<Photo {...data} />
				</Grid>
			))}
		</Grid>
	);
}

export default PhotosList;
