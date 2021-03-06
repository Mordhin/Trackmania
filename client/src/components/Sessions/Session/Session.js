import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSession } from "../../../actions/sessionActions";
import { CardioType, StrengthType, BothType } from "./sessionTypes";
import { MdTimer, MdDeleteForever, MdEdit, MdSettings } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { IoIosFitness, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import SvgDumbbell from "../../svg/Dumbbell";

export const Session = ({ data }) => {
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("profile"));
  const [sessionType, setSessionType] = useState(null);

  const [admin, setAdmin] = useState(false);

  const [strengthPage, setStrengthPage] = useState(0);
  const [strengthCarousel, setStrengthCarousel] = useState([]);
  
  const [bothPage, setBothPage] = useState(0);
  const [bothCarousel, setBothCarousel] = useState({});

  useEffect(() => {
    if (data.cardios.length > 0 && data.strengths.length === 0) {
      setSessionType("cardioType");
    }
    if (data.cardios.length === 0 && data.strengths.length > 0) {
      setSessionType("strengthType");
      setStrengthCarousel(data.strengths);
    }
    if (data.cardios.length > 0 && data.strengths.length > 0) {
      setSessionType("bothType");
      setBothCarousel({ cardio: data.cardios, strength: data.strengths });
    }
  }, []);

  const handleAdmin = () => {
    setAdmin((prevAdmin) => !prevAdmin);
  };

  const km = () => {
    if (data.cardios.length > 0) {
      return data.cardios.reduce((a, c) => a + (c.distance || 0), 0);
    }
  };

  const handlePagination = (direction, type) => {
    if (type === "strength"){
      if (direction === "up" && strengthPage !== strengthCarousel.length - 1) setStrengthPage(strengthPage + 1);
      if (direction === "down" && strengthPage !== 0) setStrengthPage(strengthPage - 1);
    }
    if (type === "both") {
      if (direction === "up" && bothPage !== data.strengths.length) setBothPage(bothPage + 1);
      if (direction === "down" && bothPage !== 0) setBothPage(bothPage - 1);
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
        <div className="dateAndAdmin">
          <div className={`date ${sessionType}`}>{data.date}</div>
          <div className={`admin ${sessionType}`} onClick={() => handleAdmin()}><MdSettings /></div>
        </div>
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
      </div>
      
      {(currentUser?.result._id || currentUser?.result.googleId) ===
        data.creator && (
          <div className={admin ? "adminButtons active" : "adminButtons inactive"}>
            <div className="editButton" onClick={handleEdit}><MdEdit /></div>
            <div className="deleteButton" onClick={handleDelete}><MdDeleteForever /></div>
          </div>
        )
      }
      

      <div key={Math.random()} className="sessionBody">
        {sessionType === "cardioType" && <CardioType data={data} />}
        {sessionType === "strengthType" && (
          <>
            {strengthPage === 0 ? <div className="emptyButton"></div> : 
              <div className="arrowButton" onClick={() => handlePagination("down", "strength")}><IoIosArrowBack /></div>
            }
            <StrengthType data={data} strengthPage={strengthPage} strengthCarousel={strengthCarousel}/>
            {strengthPage === strengthCarousel.length -1 ? <div className="emptyButton"></div> : 
              <div className="arrowButton" onClick={() => handlePagination("up", "strength")}><IoIosArrowForward /></div>
            }
          </>
        )}
        {sessionType === "bothType" && (
          <>
            {bothPage === 0 ? <div className="emptyButton"></div> : 
              <div className="arrowButton" onClick={() => handlePagination("down", "both")}><IoIosArrowBack /></div>
            }
            <BothType data={data} bothPage={bothPage} bothCarousel={bothCarousel}/>
            {bothPage === data.strengths.length ? <div className="emptyButton"></div> : 
              <div className="arrowButton" onClick={() => handlePagination("up", "both")}><IoIosArrowForward /></div>
            }
          </>
        )}
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
