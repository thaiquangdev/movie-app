import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/public/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
