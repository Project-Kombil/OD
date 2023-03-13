// import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Video from "./Video";

// variable declarations for type
import { Gallery, Video as Motion } from "../../assets/interface";

// dummy data
import { gallery } from "../../api/Objects";

const galleryData: Gallery = gallery;

function VideosList() {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "flex-start",
			}}
		>
			{galleryData.videos.map((data: Motion) => (
				<Box key={data.id}>
					<Video {...data} />
				</Box>
			))}
		</Box>
	);
}

export default VideosList;
