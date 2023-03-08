import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import PhotosList from "./PhotosList";
import VideosList from "./VideosList";

function CenteredTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box>
			<Box
				sx={{
					width: "100%",
					bgcolor: "background.paper",
					borderBottom: 1,
					borderColor: "divider",
				}}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					centered
					variant="fullWidth"
				>
					<Tab label="VIDEOS" />
					<Tab label="PHOTOS" />
				</Tabs>
			</Box>
			<Box>{value === 0 ? <VideosList /> : <PhotosList />}</Box>
		</Box>
	);
}

export default CenteredTabs;
