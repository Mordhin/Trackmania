import React, { useEffect } from "react";
import { Session } from "./Session/Session";
import { useDispatch, useSelector } from "react-redux";

import { getSessions } from "../../actions/sessionActions";

export const Sessions = () => {
  const sessions = useSelector((state) => state.sessions);
  const dispatch = useDispatch();

  console.log("sessions:" + sessions);

  useEffect(
    () => {
      dispatch(getSessions());
    },
    [
      /* dispatch */
    ]
  );

  return (
    <>
      <h1>Sessions</h1>
      <Session></Session>
      <Session></Session>
    </>
  );
};
