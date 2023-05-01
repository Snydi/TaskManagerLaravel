import React from "react";
import "./MyConfirm.css";

const MyConfirm = ({ confirm, setConfirm }) => {
  return (
    <div
      className={confirm ? "confirm active" : "confirm"}
      onClick={() => setConfirm(false)}
    >
      <div className="confirm__content" onClick={(e) => e.stopPropagation()}>
        <h2>Are you sure?</h2>
        <div className="confirm__buttons">
          <button onClick={() => setConfirm(false)}>No</button>
          <button>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default MyConfirm;
