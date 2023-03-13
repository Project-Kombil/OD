import React, { useEffect, useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import PhotosList from "../photosList";
import VideosList from "../videosList";

function TabView(state: any) {
	const [value, setValue] = useState("1");

	useEffect(() => {
		setValue(state.state);
	}, [state]);

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
						<Tab label="VIDEOS" value="1" sx={{ fontWeight: "bold" }} />
						<Tab label="PHOTOS" value="2" sx={{ fontWeight: "bold" }} />
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
