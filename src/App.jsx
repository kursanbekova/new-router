import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import Managment from "./pages/Managment";
import Create from "./pages/Create";
import Update from "./pages/Update";

const routes = createBrowserRouter([
  { path: "/", element: <Managment /> },
  { path: "kowuu", element: <Create /> },
  { path: "update/:id", element: <Update /> },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
