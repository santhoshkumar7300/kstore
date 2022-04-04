import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/HomePage/Home";
import NotFound from "./Components/NotFound/NotFound";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";

function App() {
  return (
    <Routes>
      <Route path="/Auth" element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
