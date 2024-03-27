import React, { useState } from "react";
import ModalPopup from "./ModalPopup";
import "../styles/Tracker.css";
import Timer from "./Timer";
import { MdAddCircleOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export default function Tracker() {
  const [addInputTask, setAddInputTask] = useState("");
  const [addedData, setAddedData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModalPopup() {
    setShowModal(!showModal);
  }

  function handleAddTask() {
    setAddedData([...addedData, { task: addInputTask, startTime: null }]);
    setAddInputTask("");
    setShowModal(false);
  }

  function handleDelete(index) {
    const updatedData = addedData.filter((_, i) => i !== index);
    setAddedData(updatedData);
  }

  return (
    <div>
      <div className="tracker_heading">
        <h1>TimeTracker</h1>
        <p onClick={handleToggleModalPopup} className="modalpopup_plus">
          <MdAddCircleOutline />
        </p>
      </div>
      <div className="container">
        <div className="data_container">
          {addedData &&
            addedData.length > 0 &&
            addedData.map((item, index) => (
              <div key={index}>
                <div className="data_timer">
                  <p>{item.task}</p>

                  {addedData.length > 0 && <Timer />}

                  <button
                    onClick={() => handleDelete(index)}
                    className="tracker_delete"
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        {showModal && (
          <ModalPopup
            addInputTask={addInputTask}
            setAddInputTask={setAddInputTask}
            handleAddTask={handleAddTask}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
}
