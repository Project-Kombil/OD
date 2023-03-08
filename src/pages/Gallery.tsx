import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";

import TabView from "../components/TabView";
// import CenteredTabs from "./CenteredTabs";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: "flex-start",
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
}));

function Gallery() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<StyledToolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						align="center"
						sx={{ flexGrow: 1, alignSelf: "center" }}
					>
						GALLERY
					</Typography>
					<IconButton
						size="large"
						aria-label="display more actions"
						edge="end"
						color="inherit"
					>
						<MoreIcon />
					</IconButton>
				</StyledToolbar>
			</AppBar>
			<TabView />
		</Box>
	);
}

export default Gallery;
