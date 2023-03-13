import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Video as Motion } from "../../assets/interface";

function Video(data: Motion) {
	return (
		<Card sx={{ maxWidth: 345, m: 1 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="100%"
					src="https://images.unsplash.com/photo-1613266654520-c56e7f9e6e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt="Video"
				/>
				<CardContent
					sx={{
						color: "grey",
						position: "absolute",
					}}
				>
					<ThumbUpIcon
						sx={{
							color: "grey",
							position: "absolute",
						}}
					/>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default Video;
