import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";

import DrawerMenu from "./DrawMenu";

import { MyComponentProps } from "../../assets/interface";

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
				sx={{ zIndex: 99 }}
				position={props.name === "DETAIL" ? "absolute" : "static"}
				color={props.name === "DETAIL" ? "transparent" : "primary"}
				elevation={props.name === "DETAIL" ? 0 : 4}
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
						{props.name}
					</Typography>
					<IconButton
						sx={{ color: "white" }}
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
