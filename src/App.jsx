import React, { useState } from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  let [user, setUser] = useState([
    {
      id: 1,
      name: "Ranjith",
      email: "ranjiths@gmail.com",
      num: "9768594357",
      batch: "B58",
    },
    {
      id: 2,
      name: "Varadhan",
      email: "varadhan2@gmail.com",
      num: "8694309572",
      batch: "B58",
    },
    {
      id: 3,
      name: "Roshini",
      email: "rosu@gmail.com",
      num: "6438958694",
      batch: "B58",
    },
    {
      id: 4,
      name: "Vinith",
      email: "vinith5@gmail.com",
      num: "7403769426",
      batch: "B58",
    },
  ]);
  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route
              path="/dashboard"
              element={<DashBoard user={user} setUser={setUser} />}
            />
            <Route
              path="/add-user"
              element={<AddUser user={user} setUser={setUser} />}
            />
            <Route
              path="/edit-user/:id"
              element={<EditUser user={user} setUser={setUser} />}
            />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
