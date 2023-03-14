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
			<Card sx={{ borderRadius: 0, position: "relative" }}>
				<CardActionArea disabled>
					<CardMedia
						component="img"
						height="400"
						image={url}
						alt="image"
						sx={{ position: "relative" }}
					/>

					<CardContent
						sx={{
							position: "absolute",

							bottom: 0,
							zIndex: 99,
							height: 1,
							width: 1,
							py: 4,
							color: "white",
							backgroundColor: "rgba(123, 93, 191, 0.5)",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignContent: "flex-end",
							}}
						>
							<Typography variant="h4" component="div">
								{name}
							</Typography>
							<Typography variant="body1" component="div">
								By: Alan Tiger At: Paris, France
							</Typography>
							<Typography
								variant="body1"
								component="div"
								sx={{ textAlign: "right" }}
							>
								<FavoriteIcon sx={{ mr: 1 }} fontSize="inherit" />
								{likeCount}
								<ChatBubbleIcon sx={{ ml: 2, mr: 1 }} fontSize="inherit" />
								{commentCount}
							</Typography>
							<Typography variant="body1" component="div">
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
