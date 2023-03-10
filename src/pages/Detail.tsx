import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import NavBar from "../components/NavBar";
import DetailInfo from "../components/DetailInfo";
import Comment from "../components/SingeView/Comment";

import { Gallery, Video as Motion } from "../assets/Interface";

import { gallery } from "../assets/Objects";
const galleryData: Gallery = gallery;

export function randomNumberInRange(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ElementInfo() {
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

export default ElementInfo;
