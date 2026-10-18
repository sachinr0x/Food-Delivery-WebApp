import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/ErrorPage";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer"

const App = () => (
  <div className="parent-container">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Body />
        },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/shimmer",
        element: <Shimmer />
      }
    ],
    errorElement: <ErrorPage />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<RouterProvider router={router} />);
