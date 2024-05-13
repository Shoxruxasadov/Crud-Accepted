import React, { useState, useEffect } from "react";

export default function Tab({ name, user, setUser, status }) {
  const users = user.filter((item) => item.status === status);

  function emptyStatus(id) {
    const changedUser = user.map((odamla) => {
      if (odamla.id === id) {
        odamla.status = "";
      }
      return odamla;
    });
    setUser(changedUser);
  }

  return (
    <div className="All">
      <h1>{name} List</h1>

      <ul className="listUsers">
        {users.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span className="statusname">{status}</span>
            <button onClick={() => emptyStatus(item.id)} className="edit">
              Undo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
