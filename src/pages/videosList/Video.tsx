import { Link } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Video as Motion } from "../../assets/interface";

function Video(data: Motion) {
	return (
		<Card sx={{ maxWidth: 345, m: 1 }}>
			<Link to={"/detail"} state={data}>
				<CardActionArea>
					<CardMedia
						component="video"
						height="100%"
						controls
						image={data.video_url}
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
							}}
						/>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
}

export default Video;
