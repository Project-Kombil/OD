import { Grid, Avatar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { grey } from "@mui/material/colors";

function Comment({
	profilePic,
	name,
	comment,
	time,
	commentCount,
	likes,
}: any) {
	const newColor = grey[700];
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			sx={{
				px: 3,
				py: 2,
				width: 1,
				borderBottom: 1,
				borderColor: newColor,
			}}
		>
			<Grid item>
				<Avatar
					src={profilePic}
					alt="Profile Pic"
					variant="square"
					sx={{ height: "100%", width: "100%", borderRadius: 0 }}
				/>
			</Grid>
			<Grid item xs>
				<Grid
					container
					direction="column"
					justifyContent="space-between"
					alignItems="flex-start"
					sx={{ px: 1, height: 1 }}
				>
					<Grid item>
						<Typography sx={{ color: newColor }} variant="h6" fontWeight="bold">
							{name}
						</Typography>
					</Grid>
					<Grid item>
						<Typography sx={{ color: newColor }} variant="body1">
							{comment}
						</Typography>
					</Grid>
					<Grid item container alignItems="center" spacing={1}>
						<Grid item>
							<WatchLaterIcon color="disabled" fontSize="small" />
						</Grid>
						<Grid item>
							<Typography
								sx={{ color: newColor }}
								paddingRight={3}
								variant="body2"
							>
								{time} minutes ago
							</Typography>
						</Grid>
						<Grid item>
							<FavoriteIcon color="disabled" fontSize="small" />
						</Grid>
						<Grid item>
							<Typography sx={{ color: newColor }} variant="body2">
								{likes}
							</Typography>
						</Grid>
						<Grid item>
							<ChatBubbleIcon color="disabled" fontSize="small" />
						</Grid>
						<Grid item>
							<Typography sx={{ color: newColor }} variant="body2">
								{commentCount}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Comment;
