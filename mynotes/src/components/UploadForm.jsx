import React from "react";
import "../style/UploadForm.css";
import { IoClose } from "react-icons/io5";

function UploadForm({isOpen, onClose, children}) {
    if (!isOpen) return null;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <span className="modal-close" onClick={onClose}>
              <IoClose />
            </span>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default UploadForm;
