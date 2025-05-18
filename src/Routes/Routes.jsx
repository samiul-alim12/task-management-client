import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <button className=" btn btn-error">click me</button>
      </div>
    ),
  },
]);
