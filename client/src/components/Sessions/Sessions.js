import React, { useEffect } from "react";
import { Session } from "./Session/Session";
import { useDispatch, useSelector } from "react-redux";

import { getSessions } from "../../actions/sessionActions";
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";

export const Sessions = () => {
  const sessions = useSelector((state) => state.sessions);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getSessions());
    },
  );

  return (
    <div>
      <Link className="newButton" to="/new">Nouvelle séance <MdAddCircle /></Link>
      <div className="sessionsGrid">
      {sessions.map((session) => {
        return <Session data={session}></Session>;
      })}
      </div>
    </div>
  );
};
