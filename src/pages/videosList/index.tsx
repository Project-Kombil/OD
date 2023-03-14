import { Grid } from "@mui/material";
import Video from "./Video";

// variable declarations for types
import { Gallery, Picture } from "../../assets/interface";

// dummy data
import { gallery } from "../../api/Objects";

const galleryData: Gallery = gallery;

function VideosList() {
	return (
		<Grid container spacing={2}>
			{galleryData.pictures.map((data: Picture) => (
				<Grid item key={data.id}>
					<Video {...data} />
				</Grid>
			))}
		</Grid>
	);
}

export default VideosList;
