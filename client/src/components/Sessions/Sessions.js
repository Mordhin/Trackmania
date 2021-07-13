import React, { useEffect } from "react";
import { Session } from "./Session/Session";
import { useDispatch, useSelector } from "react-redux";

import { getSessions } from "../../actions/sessionActions";

export const Sessions = () => {
  const sessions = useSelector((state) => state.sessions);
  const dispatch = useDispatch();

  console.log("sessions:");
  console.log(sessions);

  useEffect(
    () => {
      dispatch(getSessions());
    },
    [
      /* dispatch */
    ]
  );

  return (
    <div className="sessionsGrid">
      {sessions.map((session) => {
        return <Session data={session}></Session>;
      })}
    </div>
  );
};
