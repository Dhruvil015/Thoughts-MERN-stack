/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Note from "./components/Note";
import axios from "axios";
import URLs from "./URLs";

function App() {
  const [allThoughts, setAllThoughts] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const [thoughtToEdit, setThoughtToEdit] = useState("");

  const gradientClassList = ["red_yellow", "purple_teal", "pink", "green"];

  const getRandomGradient = () =>
    gradientClassList[Math.floor(Math.random() * gradientClassList.length)];

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (thoughtToEdit !== "") {
      await axios
        .put(`${URLs.baseURL}/updateThought/${thoughtToEdit}`, {
          title: noteTitle,
          description: noteDescription,
        })
        .then(function (response) {
          alert(response.data.message);
        })
        .catch(function (error) {
          alert("Please provide all information!!", error.message);
          console.log(error);
        });
    } else {
      await axios
        .post(`${URLs.baseURL}/addThought`, {
          title: noteTitle,
          description: noteDescription,
        })
        .then(function (response) {
          alert(response.data.message);
        })
        .catch(function (error) {
          alert("Please provide all information!!");
          console.log(error);
        });
    }
    setThoughtToEdit("");
    setNoteTitle("");
    setNoteDescription("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get(`${URLs.baseURL}/thoughts`)
      .then(function (response) {
        const thoughts = response.data.message;
        setAllThoughts(thoughts);
      })
      .catch(function (error) {
        alert(error.message);
        console.log(error);
      });
  };

  const editHandler = (e, obj) => {
    e.preventDefault();
    setThoughtToEdit(obj.id);
    setNoteTitle(obj.title);
    setNoteDescription(obj.description);
  };

  const deleteHandler = async (e, id) => {
    e.preventDefault();
    let confirmAction = confirm("Are you sure to remove thought?");
    if (confirmAction) {
      axios
        .delete(`${URLs.baseURL}/deleteThought/${id}`)
        .then(function (response) {
          const thoughts = response.data.message;
          setAllThoughts(thoughts);
          alert("deleted successfully!!");
        })
        .catch(function (error) {
          alert(error.message);
          console.log(error);
        });
      fetchData();
    } else {
      alert("Action canceled");
    }
  };

  return (
    <div className="App">
      <div style={{ BackgroundColor: "#234356" }}>
        <h1 style={{ textAlign: "center" }}>Thoughts</h1>
      </div>
      <div className="mainBodyArea">
        <Note
          allThoughts={allThoughts}
          getRandomGradient={getRandomGradient}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
        <Form
          noteTitle={noteTitle}
          noteDescription={noteDescription}
          setNoteTitle={setNoteTitle}
          setNoteDescription={setNoteDescription}
          submitFormHandler={submitFormHandler}
          thoughtToEdit={thoughtToEdit}
        />
      </div>
    </div>
  );
}

export default App;
