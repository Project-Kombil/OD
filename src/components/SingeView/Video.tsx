import { Card, CardActionArea, CardMedia } from "@mui/material";

function Video(props: any) {
	return (
		<Card sx={{ maxWidth: 345, m: 1 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="150"
					width="auto"
					src={props.video_url}
					alt="Video"
				/>
				{/* <CardContent></CardContent> */}
			</CardActionArea>
		</Card>
	);
}

export default Video;
