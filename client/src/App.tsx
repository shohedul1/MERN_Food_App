import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login/Login";
import MainLayout from "./layout/MainLayout";
import Signup from "./auth/Signup/Signup";
import HereSection from "./components/HereSection/HereSection";
import Profile from "./components/Profile/Profile";
import SearchPage from "./components/SearchPage/SearchPage";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";
import Cart from "./components/Cart/Cart";
import Success from "./components/Success/Success";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./auth/ResetPassword/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail/VerifyEmail";
import Restaurant from "./admin/Restaurant/Restaurant";
import AddMenu from "./admin/AddMenu/AddMenu";
import Orders from "./admin/Orders/Orders";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HereSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/admin/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/admin/menu",
        element: <AddMenu />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/order/status",
        element: <Success />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
};

export default App;
