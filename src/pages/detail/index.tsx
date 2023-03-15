import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import NavBar from "../landing/NavBar";
import DetailInfo from "./DetailInfo";
import Comment from "../commentList/Comment";

// variable declarations for type
import {
	Comments as CommentLists,
	Detail as Details,
} from "../../assets/interface";

async function fetchData(): Promise<Details> {
	const response = await fetch("http://localhost:4000/api/detail");
	const data = await response.json();
	return data;
}

function Detail() {
	const [data, setData] = useState<Details>();

	useEffect(() => {
		async function getData() {
			const result = await fetchData();
			setData(result);
		}
		getData();
	}, []);

	// state for Details
	let { state } = useLocation();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar name="DETAIL PAGE" />
			<DetailInfo {...state} />
			<Box sx={{ py: 4 }}>
				{data?.comments.map((data: CommentLists) => (
					<Comment
						key={data.id}
						profilePic={data.profile_pic_url}
						name={data.name}
						comment={data.comment}
						time={data.time}
						likes={data.total_likes}
						commentCount={data.total_comments}
					/>
				))}
			</Box>
		</Box>
	);
}

export default Detail;
