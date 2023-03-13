import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import TabView from "./TabView";
import NavBar from "../landing/NavBar";

function Gallery() {
	// state passing data to TabView
	let { state } = useLocation();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar name="GALLERY" />
			<TabView state={state} />
		</Box>
	);
}

export default Gallery;
