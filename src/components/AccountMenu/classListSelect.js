import React from 'react'
import PrimaryButton from '../views/buttons/primaryButton'

const ClassListSelect = ({listOfClasses, handleClassList, optionValue, setDefaultClass}) => (
  <div className="row-span-2 h-full">
    <PrimaryButton classname="w-full" onClick={handleClassList} label={"Class"} />
    <div className="bg-dc-dark h-full px-3 py-2">
      <select className="bg-gray-600 py-1 px-2 w-full rounded-md shadow-lg text-lg text-white border-2 border-dc-dark border-solid self-center" value={optionValue} onChange={setDefaultClass} >
      <option disabled value="0">Choose One....</option>
      {listOfClasses.map((cohort, index) => <option key={index} value={cohort.id}>{cohort.name}</option>)}
      </select>
    </div>
  </div>
)

export default ClassListSelect