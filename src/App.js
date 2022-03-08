import logo from './logo.svg';
import './App.css';
import allContacts from "../src/contacts.json"
import { useState } from "react"

function App() {

  const [ contacts, setContacts ] = useState( allContacts.slice(0, 5) )


  const handleAddContact = () => {

    const randomPos = Math.floor(Math.random() * allContacts.length)
    const randomFamoso = allContacts[randomPos]

    setContacts([randomFamoso, ...contacts])

  }
 

  const handleSortName = () => {

     // clonamos el array
    const contactsCopy = [...contacts]

    contactsCopy.sort((elem1, elem2) => elem1.name.localeCompare(elem2.name))

    setContacts(contactsCopy)


  }

  const handleSortPopularity = () => {

     // clonamos el array
    const contactsCopy = [...contacts]

    contactsCopy.sort((elem1, elem2) => elem1.popularity < elem2.popularity ? 1 : -1);
    setContacts(contactsCopy)
  }

  const handleDelete = (positionContact) => {
     // clonamos el array
     const contactsCopy = [...contacts]

     contactsCopy.splice(positionContact, 1)

     setContacts(contactsCopy)

  }
  


  return (
    <div className="App">

        <h2>IronContacts</h2>

          <button onClick={ handleAddContact }>Add Random Contact</button> 
        
          <button onClick={handleSortPopularity}>Sort by popularity</button>

          <button onClick={handleSortName}>Sort by Name</button>
          

          <table>
          <tbody>

            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Ocar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>

            {contacts.map((eachContact, index) => {

              return(
                <tr key={eachContact.id}>
                  <td><img width={100} src={eachContact.pictureUrl} alt="" /></td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity.toFixed(2)}</td>
                  <td>{eachContact.wonOscar === true ? "🏆": " "}</td>
                  <td>{eachContact.wonEmmy === true ? "🏆": " "}</td>
                  <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                </tr>
              )
            
            })}
            </tbody>
          </table>
        


    </div>
  );
}

export default App;
