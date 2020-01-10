import React from 'react'

import { Ol, ListTitles, Li } from './Styles/Fonts.jsx'

export default function ClassList(props) {


  return (
    <>
      <ListTitles>Queue</ListTitles>
    <Ol>
      {props.students.map((student, index) => 
      (
        <>
        <Li key={student.id}>{student.name}
        <button onClick={() => props.removeStudent(index)}>X</button>
        </Li>
        </>
      ))}
    </Ol>
      </>
  )
}
