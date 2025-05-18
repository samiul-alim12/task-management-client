import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/AddTask/AddTask";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Error from "../Pages/Error/Error";
import ViewTask from "../Pages/ViewTask/ViewTask";
import EditTask from "../Pages/EditTask/EditTask";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "addTask",
        Component: AddTask,
      },
      {
        path: "dashBoard",
        Component: DashBoard,
        // loader: () => fetch("https://task-management-server-pearl-two.vercel.app/tasks"),
        // hydrateFallbackElement: (
        //   <span className="text-center my-20 ">Loading.....</span>
        // ),
      },
      {
        path: "viewTasks/:id",
        Component: ViewTask,
        loader: ({ params }) =>
          fetch(
            `https://task-management-server-pearl-two.vercel.app/tasks/${params.id}`
          ),
        hydrateFallbackElement: (
          <span className="text-center my-20 ">Loading.....</span>
        ),
      },
      {
        path: "editTask/:id",
        Component: EditTask,
        loader: ({ params }) =>
          fetch(
            `https://task-management-server-pearl-two.vercel.app/tasks/${params.id}`
          ),
        hydrateFallbackElement: (
          <span className="text-center my-20 ">Loading.....</span>
        ),
      },
    ],
  },
]);
