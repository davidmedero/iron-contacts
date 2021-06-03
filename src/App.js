import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  // const firstFive = contacts.slice(0, 5);
  let theContacts = [...contacts];
  const [showContacts, setShowContacts] = useState(theContacts.splice(0, 5));
  const [restOfContacts, setRestOfContacts] = useState(theContacts);

  const getRandomContact = () => {
    let contactIndex = Math.floor(Math.random() * restOfContacts.length);
    let copyContacts = [...showContacts];
    let copyRestOfContacts = [...restOfContacts];
    copyRestOfContacts.splice(contactIndex, 1);
    copyContacts.push(restOfContacts[contactIndex]);
    setShowContacts(copyContacts);
    setRestOfContacts(copyRestOfContacts);
  };

  const sortName = () => {
    setShowContacts([
      ...showContacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    ]);
  };

  const sortPopularity = () => {
    setShowContacts([
      ...showContacts.sort((a, b) => {
        return b.popularity - a.popularity;

        // if (a.popularity > b.popularity) {
        //   return -52
        // } else { return 111 }
      }),
    ]);
  };

  console.log(showContacts, restOfContacts);
  return (
    <div className="App">
      <button onClick={getRandomContact}>Add Random Contact</button>
      <button onClick={sortName}>Name</button>
      <button onClick={sortPopularity}>Popularity</button>
      <button>Delete</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>
          {showContacts.map((eachContact) => {
            return (
              <tr>
                <td>
                  <img src={eachContact.pictureUrl} />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
