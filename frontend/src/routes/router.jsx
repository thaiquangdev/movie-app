import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/public/home/Home";
import MainLayout from "../components/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <Home /> }],
  },
]);

export default router;
