import React from 'react'
import {  FaRegWindowClose} from 'react-icons/fa';
import {  AiOutlineCheckSquare} from 'react-icons/ai';
import './coordinator_2.css'
const Coordinator_2 = () => {
  return (
    <div className='view'>

    <br/>
    <br/>
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Department Name</th>
      <th scope="col">SeminarHall Name</th>

      <th scope="col">Event Name</th>
      <th scope="col">Event Date</th>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      <th scope="col">Accept  <AiOutlineCheckSquare/></th>
      <th scope="col">Denied  <FaRegWindowClose/></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>
      <button  className='logbtn'>Accept</button>
      </td>
      <td>
      <button  className='logbtn'>reject</button>
      </td>
      

    </tr>
  
  </tbody>
</table>



    </div>
  )
}

export default Coordinator_2

