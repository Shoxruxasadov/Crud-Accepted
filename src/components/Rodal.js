import React from "react";
import Rodal from "rodal";

function Modal({ rodal, setRodal, rodalInp, setRodalInp, user, setUser, current, setCurrent }) {
  
  function saveUser() {
    if (!rodalInp) return;

    if (current==="") {
      user.push({ id: Date.now(), name: rodalInp, status: "" });
      setUser([...user]);
    }else{
      user[current] = { id: Date.now(), name: rodalInp, status: user[current].status }
    }
    
    setRodal(false);
    setRodalInp("");
    setCurrent("")
  }

  return (
    <Rodal visible={rodal} className="rodal">
      <h1 onClick={() => setRodal(false)} className="close">
        Close
      </h1>
      <h1>Add User</h1>
      <p>Select a name and status from the inputs below</p>
      <hr />
      <input
        value={rodalInp}
        onChange={(e) => setRodalInp(e.target.value)}
        className="name"
        type="text"
        placeholder="Name"
      />
      <div className="acceptedCheck">
        <input name="inpStatus" type="radio" id="Accepted" />
        <label htmlFor="Accepted">Accepted</label>
      </div>
      <div className="rejectedCheck">
        <input name="inpStatus" type="radio" id="Rejected" />
        <label htmlFor="Rejected">Rejected</label>
      </div>
      <div className="blockedCheck">
        <input name="inpStatus" type="radio" id="Blocked" />
        <label htmlFor="Blocked">Blocked</label>
      </div>
      <button
        onClick={() => {
          saveUser();
        }}
      >
        save
      </button>
    </Rodal>
  );
}

export default Modal;
