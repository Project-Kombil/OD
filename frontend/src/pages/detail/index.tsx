import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import NavBar from "../landing/NavBar";
import DetailInfo from "./DetailInfo";
import Comment from "../comment";

// variable declarations for type
import {
	Comments as CommentLists,
	Detail as Details,
} from "../../assets/interface";

import { fetchData } from "../../api";

const Detail = () => {
	const [data, setData] = useState<Details>();

	useEffect(() => {
		async function getData() {
			const result = await fetchData("/api/detail");
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
};

export default Detail;
