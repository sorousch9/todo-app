import React, { useState } from "react";

import CourseBroadList from "./components/CourseBroads/CourseBroadList/CourseBroadList";
import CourseInput from "./components/CourseBroads/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseBroads, setCourseBroads] = useState([
    { text: "React testing Course!", id: "1" },
    { text: "typeScript training!", id: "2" },
  ]);

  const addBroadHandler = (enteredText) => {
    setCourseBroads((prevBroads) => {
      const updatedBroads = [...prevBroads];
      updatedBroads.unshift({
        text: enteredText,
        id: Math.random().toString(),
      });
      return updatedBroads;
    });
  };

  const deleteItemHandler = (itemId) => {
    setCourseBroads((prevBroads) => {
      const updatedBroads = prevBroads.filter((item) => item.id !== itemId);
      return updatedBroads;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No Broads found. Maybe add one?</p>
  );
  if (courseBroads.length > 0) {
    content = (
      <CourseBroadList items={courseBroads} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="broad-form">
        <CourseInput onAddBroad={addBroadHandler} />
      </section>
      <section id="broads">{content}</section>
    </div>
  );
};

export default App;
