import React, { useState } from "react";
import Navbar from "./components/Navbar";
import All from "./components/All";
import Tab from "./components/Tab";
import Modal from "./components/Rodal";
import { users } from "./utils/users";

export default function App() {
  const [open, setOpen] = useState("all");
  const [user, setUser] = useState(users);
  const [rodal, setRodal] = useState(false);
  const [rodalInp, setRodalInp] = useState("");
  const [current, setCurrent] = useState("");

  return (
    <div className="App">
      <Modal
        rodal={rodal}
        setRodal={setRodal}
        rodalInp={rodalInp}
        setRodalInp={setRodalInp}
        user={user}
        setUser={setUser}
        current={current}
        setCurrent={setCurrent}
      />
      <Navbar setOpen={setOpen} setRodal={setRodal} setRodalInp={setRodalInp} />
      <div className="List">
        {open === "all" && (
          <All
            user={user}
            setUser={setUser}
            setRodal={setRodal}
            setRodalInp={setRodalInp}
            setCurrent={setCurrent}
          />
        )}
        {open === "accepted" && (
          <Tab
            name={"Accept"}
            user={user}
            setUser={setUser}
            status={"Accepted"}
          />
        )}
        {open === "rejected" && (
          <Tab
            name={"Reject"}
            user={user}
            setUser={setUser}
            status={"Rejected"}
          />
        )}
        {open === "blocked" && (
          <Tab
            name={"Block"}
            user={user}
            setUser={setUser}
            status={"Blocked"}
          />
        )}
      </div>
    </div>
  );
}