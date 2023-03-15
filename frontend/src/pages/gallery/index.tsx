import { Box } from "@mui/material";

import TabView from "./TabView";
import NavBar from "../landing/NavBar";

function Gallery() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar name="GALLERY" />
			<TabView />
		</Box>
	);
}

export default Gallery;
