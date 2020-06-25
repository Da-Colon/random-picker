import React, { useState, useEffect, useContext } from 'react'
import FormModal from './views/formModal'
import { StateContext } from '../context'
import XButton from './views/xButton'
import PrimaryButton from './views/primaryButton'
import { useHistory } from 'react-router-dom'

const cohort = JSON.parse(localStorage.getItem('prefered_class'))

const EditClass = () => {
  const history = useHistory()
  const [students, setStudents] = useState([])
  const [className, setClassName] = useState("")
  const { user } = useContext(StateContext)

  useEffect(() => {
    _getdefaultClass()
  },[])

  const _getdefaultClass = () => {
    setStudents(cohort.class_list)
    setClassName(cohort.name)
  }

  const _removeStudent = async (removedStudent) => {
    const newArr = [...students]
    setStudents(newArr.filter((value, index) => index !== removedStudent));
  }

  const _handleChange = (e, index) => {
    let newArr = [...students]
    newArr[index] = e.currentTarget.value
    setStudents(newArr)
  }

  const _handleClassListSubmit = async (e) => {
    e.preventDefault()
    const updatedClassList = { className: className, classList: students, editedBy: user.id }
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/class/edit/${cohort.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedClassList)
    })
    if(response.status === 200){
      const data = await response.json()
      localStorage.removeItem('prefered_class')
      localStorage.setItem('prefered_class', JSON.stringify(data))
      history.push('/');
      window.location.reload();
    }

  }

  return (
    <FormModal>
      {students.length > 0 && (
      <form className="flex flex-col" onSubmit={_handleClassListSubmit}>
        <label htmlFor="class-name" className="text-lg font-semibold">Class Name:
          <input 
            type="text"
            onChange={(e) => setClassName(e.target.value)}
            className="bg-gray-100 m-2 p-1 px-2 rounded-md text-md"
            value={className}
            required
            autoFocus
          />
        </label>
        <label htmlFor="edit-class-list" className="text-lg font-semibold">Edit Student Names</label>
        <div className="flex items-center justify-center flex-wrap">

          {students.map((student, index) => (
            <div key={index}>
            <input
            name="edit-class-list"
            className="bg-blue-100 m-2 p-1 px-2 rounded-md"
            value={student}
            type="text"
            onChange={(e) => _handleChange(e, index)}
            />
            <XButton onClick={() => _removeStudent(index)} />
            </div>
            ))}
        </div>
        <div>
        <PrimaryButton type="submit">Save</PrimaryButton>
        </div>
      </form>
        )}
    </FormModal>
  )
}

export default EditClass