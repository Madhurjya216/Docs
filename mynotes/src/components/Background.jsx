import React, { useState } from "react";
import "../style/Bg.css";
import { FaPencilAlt } from "react-icons/fa";
import UploadForm from "./UploadForm";
import Fg from "./Foreground";
import axios from "axios";

function Background() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    message: "",
  });

  const handleChanges = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({...form, [name]: value})
  };

  const uploadForm = async (e) => {
    try{
      e.preventDefault();
      const url = `http://localhost:9500/upload`
      await axios.post(url, form);
      setIsModalOpen(false);
    } catch(err){
      console.log(err);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="background_container">
      <div className="background_contain">
        <div className="front-part">
          <Fg />
        </div>
        <span id="pencil" onClick={openModal}>
          <FaPencilAlt />
        </span>
        <UploadForm onClose={closeModal} isOpen={isModalOpen}>
          <form method="post" onSubmit={uploadForm}>
            <h1 id="form_title">Add Note</h1>
            <input
              type="text"
              name="title"
              className="field"
              id="text_field"
              placeholder="Title"
              onChange={handleChanges}
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              className="field"
              placeholder="Message"
              onChange={handleChanges}
            ></textarea>
            <div className="form_div">
              <input type="submit" value="Upload" id="form_btn" />
            </div>
          </form>
        </UploadForm>
        <h1 id="main_tag">Docs.</h1>
      </div>
    </div>
  );
}

export default Background;
