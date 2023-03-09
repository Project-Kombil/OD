import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Gallery from "./pages/Gallery";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Gallery />,
		errorElement: <ErrorPage />,
	},
	{
		path: "detail",
		element: <Detail />,
		errorElement: <ErrorPage />,
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
