import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSession } from "../../../actions/sessionActions";
import { CardioType, StrengthType, BothType } from "./sessionTypes";
import { MdTimer } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import SvgDumbbell from "../../svg/Dumbbell";

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
        <div className={`date ${sessionType}`}>{data.date}</div>
        {sessionType === "cardioType" ? (
          <div className="cardioLogo">
            <FaHeartbeat />
          </div>
        ) : sessionType === "strengthType" ? (
          <div className="strengthLogo">
            <SvgDumbbell />
          </div>
        ) : (
          <div className="bothLogos">
            <FaHeartbeat />
            <SvgDumbbell />
          </div>
        )}
        {/* <button onClick={handleEdit}>Edit</button> */}
        {(currentUser?.result._id || currentUser?.result.googleId) ===
          data.creator && <button onClick={handleDelete}>Delete</button>}
      </div>

      <div className="sessionBody">
        {sessionType === "cardioType" && <CardioType data={data} />}
        {sessionType === "strengthType" && <StrengthType data={data} />}
        {sessionType === "bothType" && <BothType data={data} />}
      </div>

      <div className={`sessionFooter ${sessionType}`}>
        <div className="sum">
          <MdTimer />
          <div>{data.duration}h</div>
        </div>
        {sessionType !== "strengthType" && km() !== 0 && (
          <div className="sum">
            <GiPathDistance />
            <div>{km()}km</div>
          </div>
        )}
        {sessionType !== "cardioType" && (
          <div className="sum">
            <IoIosFitness />
            <div>{data.strengths?.length}</div>
          </div>
        )}
      </div>
    </div>
  );
};
