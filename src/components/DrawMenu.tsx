// DrawerMenu.js
import {
	Drawer,
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";

function DrawerMenu({ open, onClose }: any) {
	const handleListClick = () => {
		// handle list item click if needed
	};

	return (
		<Drawer anchor="left" open={open} onClose={onClose}>
			<Box
				sx={{ width: 250 }}
				role="presentation"
				onClick={onClose}
				onKeyDown={onClose}
			>
				<List>
					<ListItem onClick={handleListClick}>
						<ListItemIcon>
							<VideoLibraryIcon />
						</ListItemIcon>
						<ListItemText primary="VIDEOS" />
					</ListItem>
					<ListItem onClick={handleListClick}>
						<ListItemIcon>
							<PhotoAlbumIcon />
						</ListItemIcon>
						<ListItemText primary="PHOTOS" />
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
}

export default DrawerMenu;
