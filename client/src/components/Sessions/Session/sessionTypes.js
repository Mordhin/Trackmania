import React, { useEffect, useState } from "react";

export const CardioType = ({ data, handlePagination }) => {
  return (
    <div className="cardioBody">
      <div className="activityAndPagination">
        {handlePagination && (
          <button onClick={() => handlePagination("down")}>{"<"}</button>
        )}
        <h4>Cardios</h4>
        {handlePagination && (
          <button onClick={() => handlePagination("up")}>{">"}</button>
        )}
      </div>
      <ul>
        {data.cardios?.map((cardio) => (
          <li>
            {cardio.activity} - {cardio.distance}km en {cardio.duration}h
          </li>
        ))}
      </ul>
    </div>
  );
};

export const StrengthType = ({ data }) => {
  const [page, setPage] = useState(0);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    setCarousel(data.strengths);
  }, []);

  const handlePagination = (direction) => {
    if (direction === "up" && page !== carousel.length - 1) setPage(page + 1);
    if (direction === "down" && page != 0) setPage(page - 1);
  };

  return (
    <div className="strengthBody">
      <div className="activityAndPagination">
        <button onClick={() => handlePagination("down")}>{"<"}</button>
        <h4>{carousel[page]?.activity}</h4>
        <button onClick={() => handlePagination("up")}>{">"}</button>
      </div>
      <div>{carousel[page]?.duration}h</div>
      <ul>
        {carousel[page]?.series?.map((serie, index) => (
          <li>
            {index + 1}# - {serie.repetition} reps with {serie.weight}
            kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export const BothType = ({ data }) => {
  const [page, setPage] = useState(0);
  const [carousel, setCarousel] = useState({});

  useEffect(() => {
    setCarousel({ cardio: data.cardios, strength: data.strengths });
  }, []);

  const handlePagination = (direction) => {
    if (direction === "up" && page !== data.strengths.length) setPage(page + 1);
    if (direction === "down" && page != 0) setPage(page - 1);
  };

  return (
    <>
      {page === 0 && (
        <CardioType data={data} handlePagination={handlePagination} />
      )}
      {page > 0 && (
        <div className="strengthBody">
          <div className="activityAndPagination">
            <button onClick={() => handlePagination("down")}>{"<"}</button>
            <h4>{carousel.strength[page - 1]?.activity}</h4>
            <button onClick={() => handlePagination("up")}>{">"}</button>
          </div>

          <div>{carousel.strength[page - 1]?.duration}h</div>
          <ul>
            {carousel.strength[page - 1]?.series?.map((serie, index) => (
              <li>
                {index + 1}# - {serie.repetition} reps with {serie.weight}
                kg
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
