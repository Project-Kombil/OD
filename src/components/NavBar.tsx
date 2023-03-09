// NavBar.js
import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import DrawerMenu from "./DrawMenu";

import { MyComponentProps } from "../assets/Interface";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: "flex-start",
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
}));

function NavBar(props: MyComponentProps) {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				color={props.name === "DETAIL" ? "transparent" : "primary"}
			>
				<StyledToolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={handleDrawerOpen}
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
						{props.name}
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
			<DrawerMenu open={open} onClose={handleDrawerClose} />
		</Box>
	);
}

export default NavBar;
