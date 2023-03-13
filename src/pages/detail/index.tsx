import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import NavBar from "../landing/NavBar";
import DetailInfo from "./DetailInfo";
import Comment from "../commentList/Comment";

// variable declarations for type
import { Gallery, Video as Motion } from "../../assets/interface";

// Random Number Generator
import { randomNumberInRange } from "../../assets/static/Functions";

// dummy data
import { gallery } from "../../api/Objects";
const galleryData: Gallery = gallery;

function Detail() {
	// state for Details
	let { state } = useLocation();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar name="DETAIL" />
			<DetailInfo {...state} />

			{galleryData.videos.map((data: Motion) => (
				<Box key={data.id}>
					<Comment
						profilePic={
							"https://randomuser.me/api/portraits/women/" +
							randomNumberInRange(10, 50) +
							".jpg"
						}
						name="Jane Smith"
						comment={data.description}
						likes={randomNumberInRange(10, 550)}
						commentCount={randomNumberInRange(12, 100)}
					/>
				</Box>
			))}
		</Box>
	);
}

export default Detail;
