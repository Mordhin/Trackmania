import React, { useState } from "react";

export const CardioForm = ({ handleCardioSubmit }) => {
  const [cardioData, setCardioData] = useState({
    activity: "",
    distance: "",
    duration: "",
  });

  return (
    <form onSubmit={handleCardioSubmit}>
      <h2>Cardio</h2>
      <label>
        Activity
        <input
          name="activity"
          type="text"
          onChange={(e) =>
            setCardioData({ ...cardioData, activity: e.target.value })
          }
        />
      </label>
      <label>
        Distance
        <input
          name="distance"
          type="number"
          onChange={(e) =>
            setCardioData({ ...cardioData, distance: e.target.value })
          }
        />
      </label>
      <label>
        Duration
        <input
          name="duration"
          type="number"
          onChange={(e) =>
            setCardioData({ ...cardioData, duration: e.target.value })
          }
        />
      </label>
      <button type="submit">submit cardio</button>
    </form>
  );
};
