import { useEffect, useState } from "react";
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
import { Detail, Picture } from "../../assets/interface";

import { fetchData } from "../../api";

const DetailInfo = (value: Picture) => {
	const [data, setData] = useState<Detail>();

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData("/api/detail");
			setData(result);
		};
		getData();
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Card sx={{ borderRadius: 0 }}>
				<CardActionArea disabled>
					<CardMedia
						component="img"
						height="400"
						image={value.image_url}
						alt="image"
					/>

					<CardContent
						sx={{
							height: 1,
							position: "absolute",
							width: 1,
							bottom: 0,
							color: "white",
							backgroundColor: "rgba(123, 93, 191, 0.5)",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								bottom: 5,
								pb: 3,
							}}
						>
							<Typography variant="h5" component="p">
								{data?.subtitle}
							</Typography>
							<Typography variant="body2" component="p">
								By: {data?.by} At: {data?.at}
							</Typography>
							<Typography
								variant="body1"
								component="p"
								sx={{ textAlign: "right", width: "92vw" }}
							>
								<FavoriteIcon sx={{ mr: 1 }} fontSize="inherit" />
								{data?.like_count}
								<ChatBubbleIcon sx={{ ml: 2, mr: 1 }} fontSize="inherit" />
								{data?.comment_count}
							</Typography>
							<Typography variant="body2" component="p">
								On: {data?.on}
							</Typography>
						</Box>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
};

export default DetailInfo;
