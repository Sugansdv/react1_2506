import React from "react";

const Lightbox = ({ image, onClose }) => {
  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-transparent border-0" onClick={(e) => e.stopPropagation()}>
          <div className="modal-body text-center">
            <img src={image} alt="Lightbox" className="img-fluid rounded" />
            <button className="btn btn-light mt-3" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
