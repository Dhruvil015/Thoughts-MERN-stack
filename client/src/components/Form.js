import React from "react";
import "./Form.css";

const Form = ({
  noteTitle,
  noteDescription,
  setNoteTitle,
  setNoteDescription,
  submitFormHandler,
  thoughtToEdit,
}) => {
  return (
    <form className="thought_form">
      <h2>Create Note</h2>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        placeholder="Thought Title"
        id="title"
        name="title"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Enter Description"
        value={noteDescription}
        onChange={(e) => setNoteDescription(e.target.value)}
      ></textarea>
      <button onClick={(e) => submitFormHandler(e)}>
        {thoughtToEdit !== "" ? "Save" : "Create Note"}
      </button>
    </form>
  );
};

export default Form;
