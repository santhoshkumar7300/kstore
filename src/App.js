import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/HomePage/Home";
import NotFound from "./Components/NotFound/NotFound";
import Store from "./Components/Store/DashBoard/Store";
import Products from "./Components/Store/Products/Products";

import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import StoreLayout from "./Layout/StoreLayout/StoreLayout";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/store" element={<StoreLayout />}>
        <Route index element={<Store />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
