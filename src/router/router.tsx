import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    // {
    //   path: "/update/:id",
    //   element: <UpdateTodo />
    // }
  ]);

export default router;