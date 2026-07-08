
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <Error />,
  },

]);

function App() {
  return (
      <RouterProvider router={router} />
  );
  }

  export default App;