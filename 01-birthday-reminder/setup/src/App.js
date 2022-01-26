import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  let randomID = Math.floor(Math.random() * people.length - 1);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
        <button onClick={() => removeItem(randomID)}>delete one</button>
      </section>
    </main>
  );
}

export default App;
