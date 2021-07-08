import React from "react";
import { useDispatch } from "react-redux";
import { deleteSession } from "../../../actions/sessionActions";

export const Session = ({ data }) => {
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("profile"));

  const handleEdit = () => {};

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSession(data));
  };

  return (
    <div>
      <h3>{data.date}</h3>
      <p>{data.duration} heures</p>
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
      <div>{data.creator}</div>
      <button onClick={handleEdit}>Edit</button>
      {(currentUser?.result._id || currentUser?.result.googleId) ===
        data.creator && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
};
