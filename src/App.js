import contactsList from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  let size = 6;
  let contactData = contactsList.slice(0, size);

  const [contacts, setContacts] = useState(contactData);

  function addRandomContact() {
    const randomContact =
      contactsList[Math.floor(Math.random() * contactsList.length)];
    const copyOfContacts = [...contacts];
    copyOfContacts.push(randomContact);
    setContacts(copyOfContacts);
    console.log(randomContact);
  }

  function sortByPopularity() {
    const popularityContact = contacts;
    let sorted = popularityContact.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (b.popularity > a.popularity) {
        return 1;
      }
      return 0;
    });
    setContacts([...sorted]);
  }

  function sortByName() {
    const nameContacts = contacts;
    let sorted = nameContacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    setContacts([...sorted]);
  }

  //const deleteitems = (index) => {
  //const copy = [...contacts];
  //copy.splice(index, 1);
  //setContacts(copy);
  //};

  function deleteitems(idToRemove) {
    const deleteContacts = contacts.filter(
      (contacts) => contacts.id !== idToRemove
    );
    setContacts(deleteContacts);
  }

  // const deleteitems = (idToRemove) => {
  // setContacts(contactData.filter((contacts) => contacts.id !== idToRemove));
  //};

  console.log(contactData);
  return (
    <div className="App">
      <table>
        <h1> IronContacts</h1>
        <button onClick={() => addRandomContact()}>Add Random Contact </button>
        <button onClick={() => sortByPopularity()}>Sort by popularity </button>
        <button onClick={() => sortByName()}>Sort by name </button>
        <tead>
          <tr>
            <td>picture</td>
            <td> name</td>
            <td> popularity </td>
            <td> wonEmmy </td>
            <td> wonOscar </td>
            <td> Actions </td>
          </tr>
        </tead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr>
                <td>
                  <img src={contacts.pictureUrl} width="100px" />
                </td>
                <td> {contacts.name}</td>
                <td> {contacts.popularity} </td>
                <td>{contacts.wonEmmy && <p>Won</p>}</td>
                <td>{contacts.wonOscar && <p>Won</p>}</td>
                <td>
                  <button onClick={() => deleteitems(contacts.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
