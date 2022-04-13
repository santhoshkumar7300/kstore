import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/HomePage/Home";
import NotFound from "./Components/NotFound/NotFound";
import AddToCart from "./Components/Store/AddToCart/AddtoCart";
import Categories from "./Components/Store/Categories/Categories";
import Store from "./Components/Store/DashBoard/Store";
import ManageMembers from "./Components/Store/MangeMembers/ManageMembers";
import Products from "./Components/Store/Products/Products";
import Wishlist from "./Components/Store/Wishlist/Wishlist";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import StoreLayout from "./Layout/StoreLayout/StoreLayout";
import { AuthPrivateRoute, StorePrivateRoute } from "./Utility/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/auth"
        element={
          // <AuthPrivateRoute>
          <AuthLayout />
          // </AuthPrivateRoute>
        }
      >
        <Route index element={<SignIn />} />

        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="signup" element={<SignUp />} />

      <Route
        path="/store"
        element={
          // <StorePrivateRoute>
          <StoreLayout />
          // </StorePrivateRoute>
        }
      >
        <Route index element={<Store />} />
        <Route path="products" element={<Products />} />
        <Route path="addtocart" element={<AddToCart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="managemembers" element={<ManageMembers />} />
        <Route path="categories" element={<Categories />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
