import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import axios from "axios";
import "./modal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

function ModalComponent({ isOpenModal, setIsOpenModal }) {
  let subtitle;
  //  const [modalData, setModalData] = useState({});

  // function openModal() {
  //   setIsOpenModal(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpenModal(false);
  // }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");



  const handleSubmit = async (data) => {
    let timestamp = Date.now();
    await axios.post("http://localhost:9000/api/blog", {
      title,
      description,
      content,
      timestamp
    });
    // .then(function (response) {
    //   if (response.status === 201) {
    //     alert("Registration Completed");
    //   } else {
    //     alert("Check Your Details");
    //   }
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });



  };


  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        //     onAfterOpen={afterOpenModal}
        //    onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        {/* <button onClick={() => setIsOpenModal(false)}>close</button> */}
        {/* <div>I am a modal</div> */}
        <form>
          <div>
            <input
              className="title"
              placeholder="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <input
              className="descrip"
              placeholder="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div>
            <textarea
              className="content"
              placeholder="put down your ideas"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
          <button onClick={handleSubmit}>Save</button>
          <button onClick={() => setIsOpenModal(false)}>Close</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalComponent;
