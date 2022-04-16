import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Lobby() {
  const name = useSelector((store) => store.user);
  const [room, setRoom] = useState("");

  localStorage.setItem('userName', name)
  return (
    <>
      <h1 className="login-h1">Войдите в комнату</h1>
      <form method="post">
        <div className="form-group">
          <input
            onChange={(e) => setRoom(e.target.value)}
            type="text"
            placeholder="Room"
            required
            className="form-control form-input"
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/game/?name=${name}&room=${room}`}
        >
          <input type="submit" className="form-submit" value="Log In" />
        </Link>
      </form>
    </>
  );
}

export default Lobby;
