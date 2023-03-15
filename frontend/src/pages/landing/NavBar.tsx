import { useState } from "react";
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";

import DrawerMenu from "./DrawMenu";

// variable declarations for type
type variableDeclaration = {
	name: string;
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: "flex-start",
	paddingTop: theme.spacing(2),
	paddingBottom: theme.spacing(2),
}));

function NavBar({ name }: variableDeclaration) {
	const [open, setOpen] = useState<any>(false);

	const appBarColor = name === "DETAIL PAGE" ? "transparent" : "#7b5dbf";
	const appBarPosition = name === "DETAIL PAGE" ? "absolute" : "static";
	const appBarElavation = name === "DETAIL PAGE" ? 0 : 4;

	// Draw Functions
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				sx={{ zIndex: 99, backgroundColor: appBarColor }}
				position={appBarPosition}
				elevation={appBarElavation}
			>
				<StyledToolbar>
					<IconButton
						size="large"
						edge="start"
						aria-label="open drawer"
						sx={{
							color: "white",
						}}
						onClick={handleDrawerOpen}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						sx={{ flexGrow: 1, alignSelf: "center" }}
						variant="h6"
						noWrap
						component="div"
						align="center"
						color="white"
						fontWeight="bold"
					>
						{name}
					</Typography>
					<Tooltip title="Does Nothing">
						<IconButton
							sx={{ color: "white" }}
							size="large"
							aria-label="display more actions"
							edge="end"
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</Tooltip>
				</StyledToolbar>
			</AppBar>
			<DrawerMenu open={open} onClose={handleDrawerClose} />
		</Box>
	);
}

export default NavBar;
