
import React, { useState } from 'react'


export default function CrudOpeartions() {

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  const handleInput= (event) => {
    
    setFirstName(event.target.value);
    console.log(FirstName);

    setLastName(event.target.value);
    console.log(LastName);
  }

    

  

  return (
    <div>
        <h1>Names Table</h1>

        <div>
        <label>First name</label>
        <input value={FirstName}></input>
        </div>

        <div>
        <label>Last name</label>
        <input></input>
        </div>

        <button onClick={handleInput}>Save</button>


        <table>

          <thead>
            <tr>
              <th>First Name </th>
              <th>Last Name </th>
              <th>Edit </th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{FirstName}</td>
              <td>{LastName}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>

        </table>

    </div>
  )
}
