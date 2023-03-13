// import { useState } from "react";
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

	// const [likeValue, setLikeValue] = useState(likeCount);
	// const [commentValue, setCommentValue] = useState(commentCount);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Card>
				<CardActionArea>
					<CardMedia component="img" height="400" image={url} alt="image" />
					<CardContent
						sx={{
							position: "absolute",
							bottom: 0,
							zIndex: 1,
							width: 1,
						}}
					>
						<Box>
							<Typography
								sx={{
									my: 2,
								}}
								variant="h4"
								component="div"
								color="white"
							>
								{name}
							</Typography>
							<Typography variant="body1" component="div" color="white">
								By: Alan Tiger At: Paris, France
							</Typography>
							<Typography
								align="right"
								variant="body1"
								component="div"
								color="white"
							>
								<FavoriteIcon
									sx={{
										mr: 1,
									}}
									fontSize="inherit"
								/>
								{likeCount}
								<ChatBubbleIcon
									sx={{
										ml: 2,
										mr: 1,
									}}
									fontSize="inherit"
								/>
								{commentCount}
							</Typography>
							<Typography variant="body1" component="div" color="white">
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
