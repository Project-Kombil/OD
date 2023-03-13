import { Link as RouterLink } from "react-router-dom";
import {
	Drawer,
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import Link from "@mui/joy/Link";

import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";

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
						component={RouterLink}
						to="/"
						state="1"
						underline="none"
						sx={{ color: "grey", fontWeight: 500 }}
					>
						<ListItem>
							<ListItemIcon>
								<VideoLibraryIcon />
							</ListItemIcon>
							<ListItemText primary="VIDEOS" />
						</ListItem>
					</Link>
					<Link
						component={RouterLink}
						to="/"
						state="2"
						underline="none"
						sx={{ color: "grey" }}
					>
						<ListItem>
							<ListItemIcon>
								<PhotoAlbumIcon />
							</ListItemIcon>
							<ListItemText primary="PHOTOS" sx={{ fontWeight: 500 }} />
						</ListItem>
					</Link>
				</List>
			</Box>
		</Drawer>
	);
}

export default DrawerMenu;
