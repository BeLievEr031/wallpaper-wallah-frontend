import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import Root from "./layouts/Root";
import ViewWallpaper from "./pages/ViewWallpaper";
import SearchWallpaper from "./pages/SearchWallpaper";

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
            },
            {
                path: "search-wallpaper/:search",
                element: <SearchWallpaper />
            }
        ]
    }
])

export default router;