import {
	Drawer,
	Box,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import InfoIcon from "@mui/icons-material/Info";

function DrawerMenu({ open, onClose }: any) {
	return (
		<Drawer anchor="left" open={open} onClose={onClose}>
			<Box
				sx={{ width: 250 }}
				role="presentation"
				onClick={onClose}
				onKeyDown={onClose}
			>
				<List>
					<Link
						href="/"
						underline="none"
						sx={{ color: "grey", fontWeight: 500 }}
					>
						<ListItem>
							<ListItemIcon>
								<VideoLibraryIcon />
							</ListItemIcon>
							<ListItemText primary="GALLERY" />
						</ListItem>
					</Link>
					<Link
						href="/detail"
						underline="none"
						sx={{ color: "grey", fontWeight: 500 }}
					>
						<ListItem>
							<ListItemIcon>
								<InfoIcon />
							</ListItemIcon>
							<ListItemText primary="DETAIL" sx={{ fontWeight: 500 }} />
						</ListItem>
					</Link>
				</List>
			</Box>
		</Drawer>
	);
}

export default DrawerMenu;
