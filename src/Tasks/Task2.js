
import React, { useState } from 'react'


export default function Task2() {

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');  

  return (
    <div>
        <h1>Names Table</h1>

        <div>
        <label>First name</label>
        <input onChange={(e)=> setFirstName(e.target.value)}></input>
        </div>

        <div>
        <label>Last name</label>
        <input onChange={(a)=> setFirstName(a.target.value)}></input>
        </div>

        <button >Save</button>


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
