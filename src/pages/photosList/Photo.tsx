import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import { Picture } from "../../assets/interface";

function Photo(data: Picture) {
	return (
		<Card sx={{ width: 325, borderRadius: 0 }}>
			<Link to={"/detail"} state={data}>
				<CardActionArea>
					<CardMedia component="img" src={data.image_url} alt="Picture" />
				</CardActionArea>
			</Link>
		</Card>
	);
}

export default Photo;
