import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSession } from "../../actions/sessionActions";
import { CardioForm } from "./CardioForm";

export const Form = () => {
  const [sessionData, setSessionData] = useState({
    date: "",
    duration: "",
    acitivities: {
      cardio: [],
    },
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSession(sessionData));
  };

  const handleCardioSubmit = () => {
    setSessionData({ ...sessionData.cardio });
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
            required
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
        <CardioForm handleCardioSubmit={handleCardioSubmit} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
