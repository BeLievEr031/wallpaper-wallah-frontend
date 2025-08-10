import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import Root from "./layouts/Root";
import ViewWallpaper from "./pages/ViewWallpaper";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "view-wallpaper",
                element: <ViewWallpaper />
            }
        ]
    }
])

export default router;