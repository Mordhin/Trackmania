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
      <div>{data.creator}</div>
      <button onClick={handleEdit}>Edit</button>
      {(currentUser?.result._id || currentUser?.result.googleId) ===
        data.creator && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
};
