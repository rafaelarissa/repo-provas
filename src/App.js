import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./components/UserAuth/SignUp/index";
import Login from "./components/UserAuth/Login/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/exams" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
