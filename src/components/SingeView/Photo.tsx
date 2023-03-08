import { Card, CardActionArea, CardMedia } from "@mui/material";
// import { Picture } from "../../assets/Interface";

function Photo(props: any) {
	return (
		<Card sx={{ maxWidth: 345, m: 1 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="150"
					src={props.image_url}
					alt="Pictures"
				/>
			</CardActionArea>
		</Card>
	);
}

export default Photo;
