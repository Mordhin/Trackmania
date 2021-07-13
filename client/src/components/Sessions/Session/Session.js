import React from "react";
import { useDispatch } from "react-redux";
import { deleteSession } from "../../../actions/sessionActions";

export const Session = ({ data }) => {
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("profile"));

  const km = () => {
    if (data.cardios.length > 0) {
      return data.cardios.reduce((a, c) => a + c.distance, 0);
    }
  };

  const handleEdit = () => {};

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSession(data));
  };

  return (
    <div className="sessionCard">
      <div className="sessionHeader">
        <h3>{data.date}</h3>
        <button onClick={handleEdit}>Edit</button>
        {(currentUser?.result._id || currentUser?.result.googleId) ===
          data.creator && <button onClick={handleDelete}>Delete</button>}
      </div>
      <div className="sessionBody">
        <div>{data.creator}</div>
        <div>
          <h4>Cardios</h4>
          <ul>
            {data.cardios?.map((cardio) => (
              <li>
                {cardio.activity} - {cardio.distance}km en {cardio.duration}h
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Strengths</h4>
          <ul>
            {data.strengths?.map((strengths) => (
              <li>
                {strengths.activity} - {strengths.duration}h
                {strengths.series?.map((serie, index) => (
                  <div>
                    Serie #{index + 1} - {serie.repetition} reps with{" "}
                    {serie.weight}kg
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sessionFooter">
        <div>{data.duration}h</div>
        <div>{km()}km</div>
        <div>{data.strengths?.length}</div>
      </div>
    </div>
  );
};
