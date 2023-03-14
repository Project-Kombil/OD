import { Link } from "react-router-dom";
import { Card, CardActionArea, CardMedia } from "@mui/material";

// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Picture } from "../../assets/interface";

function Video(data: Picture) {
	return (
		<Card sx={{ maxWidth: 325, borderRadius: 0 }}>
			<Link to={"/detail"} state={data}>
				<CardActionArea>
					<CardMedia component="img" src={data.image_url} alt="Video" />
				</CardActionArea>
			</Link>
		</Card>
	);
}

export default Video;
