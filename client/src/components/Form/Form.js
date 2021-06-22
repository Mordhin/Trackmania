import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSession } from "../../actions/sessionActions";

export const Form = () => {
  const [sessionData, setSessionData] = useState({
    date: "",
    duration: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSession(sessionData));
  };

  return (
    <>
      <h1>FORM</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label>
          Date
          <input
            name="date"
            onChange={(e) =>
              setSessionData({ ...sessionData, date: e.target.value })
            }
          />
        </label>
        <label>
          Duration
          <input
            name="duration"
            onChange={(e) =>
              setSessionData({ ...sessionData, duration: e.target.value })
            }
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};
