import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import TabView from "../components/TabView";
import NavBar from "../components/NavBar";

function Gallery() {
	let { state } = useLocation();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar name="GALLERY" />
			<TabView state={state} />
		</Box>
	);
}

export default Gallery;
