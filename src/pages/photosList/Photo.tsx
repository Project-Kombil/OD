// import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import { Picture } from "../../assets/interface";

function Photo(data: Picture) {
	return (
		<Card sx={{ maxWidth: 345, m: 1 }}>
			<Link to={"/detail"} state={data}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="100%"
						src={data.image_url}
						alt="Pictures"
					/>
				</CardActionArea>
			</Link>
		</Card>
	);
}

export default Photo;
