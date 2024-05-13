import React, { useState, useEffect } from "react";

function All({ user, setUser, setRodal, setRodalInp, setCurrent }) {

  function changeStatus(i, status) {
    user[i].status = status;
    setUser([...user]);
  }

  function edited(i) {
    setRodal("open");
    setRodalInp(user[i].name);
    setCurrent(i);
  }

  function deleted(i) {
    user.splice(i, 1);
    setUser([...user]);
  }

  return (
    <div className="All">
      <h1>All List</h1>

      <ul className="listUsers">
        {user.map((u, i) => (
          <li key={i}>
            <span>{u.name}</span>
            <div className="allbtn">
              {u.status === "" ? (
                <div className="btn-group">
                  <button onClick={() => changeStatus(i, "Accepted")}>
                    Accepted
                  </button>
                  <button onClick={() => changeStatus(i, "Rejected")}>
                    Rejected
                  </button>
                  <button onClick={() => changeStatus(i, "Blocked")}>
                    Blocked
                  </button>
                </div>
              ) : (
                <span
                  style={{
                    color: "rgb(1, 72, 143)",
                    textShadow: "0 0 5px rgba(1, 72, 143, 0.3)",
                  }}
                  className="checkedStatus"
                >
                  {u.status}
                </span>
              )}
              <button onClick={() => edited(i)} className="edit">
                Edit
              </button>
              <button onClick={() => deleted(i)} className="delete">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default All;
