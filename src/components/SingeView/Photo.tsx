// import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

function Photo(props: any) {
	// const [data, setData] = useState("This");

	// useEffect(() => {
	// 	setData(props.data);
	// 	console.log(data);
	// }, []);

	return (
		<Card sx={{ maxWidth: 345, m: 1 }}>
			<Link to="/detail" className="link">
				<CardActionArea>
					<CardMedia
						component="img"
						height="100%"
						src={
							"https://images.unsplash.com/photo-1613266654520-c56e7f9e6e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						}
						alt="Pictures"
					/>
				</CardActionArea>
			</Link>
		</Card>
	);
}

export default Photo;
