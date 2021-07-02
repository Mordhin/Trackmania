import React from "react";

export const Session = ({ data }) => {
  const editSession = () => {};

  const deleteSession = () => {};

  return (
    <div>
      <h3>{data.date}</h3>
      <p>{data.duration} heures</p>
      <div>{data.creator}</div>
      <button onClick={editSession}>Edit</button>
      <button onClick={deleteSession}>Delete</button>
    </div>
  );
};
