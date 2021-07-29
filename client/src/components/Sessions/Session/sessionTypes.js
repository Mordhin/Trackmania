import React from "react";

export const CardioType = ({ data }) => {
  return (
    <div className="cardioBody">
      <div className="activityAndPagination">
        <div>Cardios</div>
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

export const StrengthType = ({ data, strengthPage, strengthCarousel }) => {
  const page = strengthPage;
  const carousel = strengthCarousel;

  return (
    <div className="strengthBody">
      <div className="activityAndPagination">
        <div>{carousel[page]?.activity}</div>
      </div>
      <ul>
        {carousel[page]?.series?.map((serie, index) => (
          <li>
            {index + 1}# - {serie.repetition} reps with {serie.weight}
            kg
          </li>
        ))}
        <div>Durée: {carousel[page]?.duration}h</div>
      </ul>
    </div>
  );
};

export const BothType = ({ data, bothPage, bothCarousel }) => {
  const page= bothPage;
  const carousel = bothCarousel;

  return (
    <>
      {page === 0 && (
        <CardioType data={data} />
      )}
      {page > 0 && (
        <div className="strengthBody">
          <div className="activityAndPagination">
            <div>{carousel.strength[page - 1]?.activity}</div>
          </div>
          <ul>
            {carousel.strength[page - 1]?.series?.map((serie, index) => (
              <li>
                {index + 1}# - {serie.repetition} reps with {serie.weight}
                kg
              </li>
            ))}
            <div>Durée: {carousel.strength[page - 1]?.duration}h</div>
          </ul>
        </div>
      )}
    </>
  );
};
