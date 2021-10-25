import React from "react";

const Api = ({ simpson }) => {
  return (
    <div>
        <h2>{simpson.character}</h2>
        <img src={simpson.image} alt="une image des Simpson"/>
      <p>{simpson.quote}</p>
    </div>
  );
};

export default Api;
