import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/public/Home";
import MainLayout from "@components/layouts/MainLayout";
import Topic from "@pages/public/Topic";
import Movie from "@pages/public/Movie";
import MovieSeries from "@pages/public/MovieSeries";
import ShowTime from "@pages/public/ShowTime";
import MovieSingle from "@pages/public/MovieSingle";
import Actors from "@pages/public/Actors";
import MovieCountry from "@pages/public/MovieCountry";
import Event from "@pages/public/Event";

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
      {
        path: "phim-le",
        element: <MovieSingle />,
      },
      {
        path: "phim-bo",
        element: <MovieSeries />,
      },
      {
        path: "quoc-gia/:country",
        element: <MovieCountry />,
      },
      {
        path: "dien-vien",
        element: <Actors />,
      },
      {
        path: "lich-chieu",
        element: <ShowTime />,
      },
      {
        path: "ngay-giai-phong-mien-nam",
        element: <Event />,
      },
    ],
  },
]);

export default router;
