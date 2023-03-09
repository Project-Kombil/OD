import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

import NavBar from "../components/NavBar";

function ElementInfo() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						sx={{
							width: "100%",
						}}
						image="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"
						alt="image"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<NavBar name="DETAIL" />
		</Box>
	);
}

export default ElementInfo;
