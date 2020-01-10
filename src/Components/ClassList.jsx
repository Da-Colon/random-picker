import React, {useState, useEffect} from 'react'
import classData from '../Data/Dummy.data.json'

export default function ClassList(props) {


  return (
    <ul>
      {props.students.map((student, index) => 
      (
        <li key={student.id}>{student.name}
        <button onClick={() => props.removeStudent(index)}>X</button>
        </li>
      ))}
    </ul>
      
  )
}
