import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";

// variable declarations for type
import { Picture } from "../../assets/interface";

// function for random number generator
import { randomNumberInRange } from "../../assets/static/Functions";

function DetailInfo(data: Picture) {
	const likeCount = randomNumberInRange(10, 74);
	const commentCount = randomNumberInRange(10, 74);
	const name = data.name;
	const url = data.image_url;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Card sx={{ borderRadius: 0 }}>
				<CardActionArea disabled>
					<CardMedia component="img" height="400" image={url} alt="image" />

					<CardContent
						sx={{
							height: 1,
							position: "absolute",
							width: 1,
							bottom: 0,
							color: "white",
							backgroundColor: "rgba(123, 93, 191, 0.5)",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								bottom: 5,
								pb: 3,
							}}
						>
							<Typography variant="h5" component="p">
								{name}
							</Typography>
							<Typography variant="body2" component="p">
								By: Alan Tiger At: Paris, France
							</Typography>
							<Typography
								variant="body1"
								component="p"
								sx={{ textAlign: "right", width: "95vw" }}
							>
								<FavoriteIcon sx={{ mr: 1 }} fontSize="inherit" />
								{likeCount}
								<ChatBubbleIcon sx={{ ml: 2, mr: 1 }} fontSize="inherit" />
								{commentCount}
							</Typography>
							<Typography variant="body2" component="p">
								On: March 31st, 2016
							</Typography>
						</Box>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
}

export default DetailInfo;
