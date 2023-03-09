import { Box } from "@mui/material";

import TabView from "../components/TabView";
import NavBar from "../components/NavBar";

function Gallery() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar name="GALLERY" />
			<TabView />
		</Box>
	);
}

export default Gallery;
