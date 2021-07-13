import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSession } from "../../../actions/sessionActions";
import { CardioType, StrengthType, BothType } from "./sessionTypes";

export const Session = ({ data }) => {
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("profile"));
  const [sessionType, setSessionType] = useState(null);

  useEffect(() => {
    if (data.cardios.length > 0 && data.strengths.length === 0) {
      setSessionType("cardioType");
    }
    if (data.cardios.length === 0 && data.strengths.length > 0) {
      setSessionType("strengthType");
    }
    if (data.cardios.length > 0 && data.strengths.length > 0) {
      setSessionType("bothType");
    }
  }, []);

  const km = () => {
    if (data.cardios.length > 0) {
      return data.cardios.reduce((a, c) => a + (c.distance || 0), 0);
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

        {sessionType === "cardioType" && <CardioType data={data} />}

        {sessionType === "strengthType" && <StrengthType data={data} />}

        {sessionType === "bothType" && <BothType data={data} />}
      </div>
      <div className="sessionFooter">
        <div>{data.duration}h</div>
        <div>{km()}km</div>
        <div>{data.strengths?.length}</div>
      </div>
    </div>
  );
};
