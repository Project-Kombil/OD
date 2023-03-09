import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import PhotosList from "./PhotosList";
import VideosList from "./VideosList";

function TabView() {
	const [value, setValue] = useState("1");
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						onChange={handleChange}
						centered
						variant="fullWidth"
						aria-label="tab list"
					>
						<Tab label="VIDEOS" value="1" />
						<Tab label="PHOTOS" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<VideosList />
				</TabPanel>
				<TabPanel value="2">
					<PhotosList />
				</TabPanel>
			</TabContext>
		</Box>
	);
}

export default TabView;
