import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/public/home/Home";
import MainLayout from "@components/layouts/MainLayout";
import Topic from "@pages/public/topic/Topic";
import Movie from "@pages/public/movie/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "chu-de",
        element: <Topic />,
      },
      {
        path: "duyet-tim",
        element: <Movie />,
      },
    ],
  },
]);

export default router;
