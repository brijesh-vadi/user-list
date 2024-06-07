import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/:userId" element={<UserDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
