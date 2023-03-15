import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import TabView from "./TabView";
import NavBar from "../landing/NavBar";

import { fetchData } from "../../api";

import { Gallery as notGallery } from "../../assets/interface";

const Gallery = () => {
	const [data, setData] = useState<notGallery>();
	console.log(data.name);

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData("/api/gallery");
			setData(result);
			// console.log("Inside useEffect Data " + data);
			// console.log(data);
		};
		getData();
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>
			{/* <NavBar props={data} /> */}
			{/* {data.name} */}
			<TabView />
		</Box>
	);
};

export default Gallery;
