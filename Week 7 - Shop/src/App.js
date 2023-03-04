import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage, { loader as HomeLoader } from "./pages/Home";
import ProductPage from "./pages/Product";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "products",
    loader: HomeLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product/:productId", element: <ProductPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
