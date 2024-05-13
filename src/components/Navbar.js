import React, { useState, useEffect } from "react";
import {
  TbMenu2,
  TbCircleCheck,
  TbCircleMinus,
  TbPlaylistAdd,
} from "react-icons/tb";
import { MdNotInterested } from "react-icons/md";

function Navbar({ setOpen, setRodal, setRodalInp }) {
  return (
    <div className="navbar">
      <div onClick={() => setOpen("all")}>
        <TbMenu2 className="navIcons" />
        <span>All</span>
      </div>
      <div onClick={() => setOpen("accepted")}>
        <TbCircleCheck className="navIcons" />
        <span>Accept</span>
      </div>
      <div onClick={() => setOpen("rejected")}>
        <TbCircleMinus className="navIcons" />
        <span>Reject</span>
      </div>
      <div onClick={() => setOpen("blocked")}>
        <MdNotInterested className="navIcons" />
        <span>Blocked</span>
      </div>
      <div
        onClick={() => {
          setRodal(true);
          setRodalInp("");
        }}
      >
        <TbPlaylistAdd className="navIcons" />
        <span>Add</span>
      </div>
    </div>
  );
}

export default Navbar;
