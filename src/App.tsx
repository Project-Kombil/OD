import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Gallery from "./pages/Gallery";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Gallery />,
	},
	{
		path: "detail",
		element: <Detail />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
