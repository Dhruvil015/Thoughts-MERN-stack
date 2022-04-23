import React from "react";
import "./Note.css";
import EditIcon from "../assets/edit-icon.svg";
import TrashIcon from "../assets/trash-icon.svg";

const Notes = ({
  allThoughts,
  getRandomGradient,
  editHandler,
  deleteHandler,
}) => {
  return (
    <div className="container">
      {allThoughts.map((thought) => {
        return (
          <div className="noteStruct" key={thought._id}>
            <div className={`title gradient__pink`}>{thought.title}</div>
            <div className="description">{thought.description}</div>
            <div className="iconsContainer">
              <img
                className="icon"
                src={EditIcon}
                alt="edit-icon"
                onClick={(e) =>
                  editHandler(e, {
                    id: thought._id,
                    title: thought.title,
                    description: thought.description,
                  })
                }
              />
              <img
                className="icon"
                src={TrashIcon}
                alt="trash-icon"
                onClick={(e) => deleteHandler(e, thought._id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
