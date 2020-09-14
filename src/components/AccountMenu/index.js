import React from 'react'
import PrimaryButton from '../views/buttons/primaryButton';
import SecondaryButton from '../views/buttons/secondaryButton';
import FormHeader from '../../components/views/formHeader';
import ClassListSelect from './classListSelect';

const AccountMenu = ({handleUploadClick, handleEditClick, handleSpinnerClick, setDefaultClass, handleClassList, listOfClasses, optionValue, handleLogout, showClassList, handleCancel}) => (
  <div className="p-8 shadow-lg">
    <FormHeader title="Account Menu" />
    <div className="grid sm:grid-col-2 col-gap-4 row-gap-4 sm:min-w-xxs sm:max-w-sm">
      <PrimaryButton classname="w-full px-1" onClick={handleUploadClick} label={"Upload"} />
      {!showClassList && listOfClasses.length !== 0 && <PrimaryButton classname="w-full" onClick={handleClassList} label={"Class"} />}
      {showClassList && listOfClasses.length > 0 && <ClassListSelect listOfClasses={listOfClasses} handleClassList={handleClassList} optionValue={optionValue} setDefaultClass={setDefaultClass}/>}
      <PrimaryButton classname="w-full" onClick={handleEditClick} disable={!localStorage.getItem('prefered_class') ? true : false } label="Edit" />
      <PrimaryButton classname="w-full" onClick={handleSpinnerClick} label="Spinner" />
      <PrimaryButton classname="col-span-2 w-full font-semibold" textColor="text-black" bgColor="bg-red-600" onClick={handleLogout} label="Logout" />
      <SecondaryButton classname="col-span-2 w-full" onClick={handleCancel} label="Cancel" />
    </div>
  </div>
)

export default AccountMenu
