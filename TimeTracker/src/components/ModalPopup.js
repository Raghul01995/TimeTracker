import { useEffect, useRef } from "react";
import "../styles/ModalPopup.css";
import { MdCancel } from "react-icons/md";

export default function ModalPopup({
  addInputTask,
  setAddInputTask,
  handleAddTask,
  setShowModal,
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  
  return (
    <div className="modal">
      <div className="modal_container">
        <span onClick={() => setShowModal(false)} className="cancel_popup">
          <MdCancel />
        </span>

        <p className="modal_para">Enter the Task Name</p>

        <input
          ref={inputRef}
          type="text"
          className="modal_input"
          value={addInputTask}
          onChange={(e) => setAddInputTask(e.target.value)}
        />

        <button
          onClick={handleAddTask}
          className="modal_btn"
          disabled={addInputTask === ""}
        >
          Save
        </button>
      </div>
    </div>
  );
}
