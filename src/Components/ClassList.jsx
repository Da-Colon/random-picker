import React, {useState, useEffect} from 'react'
import classData from '../Data/Dummy.data.json'

export default function ClassList() {
  const [students, setStudents] = useState([])
  
  useEffect(() => {
    setStudents(classData.ClassList) 
  },[])
  

  const removeStudent = (index) => {
    // console.log("this", students.slice((index-1), 1))
    const newArray = [...students]
    newArray.splice(index, 1)
    console.log("THIS", newArray)
    setStudents(newArray)
  }

  return (
    <ul>
      {students.map((student, index) => 
      (
        <li key={student.id}>{student.name}
        <button onClick={() =>removeStudent(index)}>X</button>
        </li>
      ))}
    </ul>
      
  )
}
