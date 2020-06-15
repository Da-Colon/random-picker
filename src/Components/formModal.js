import React from 'react'

const FormModal = ({header, children}) => (
  <>
  <div className="bg-gray-600 min-h-full pt-16 w-full flex justify-center items-center">
        <div className="bg-white w-1/2 h-full rounded-md p-4 text-center no-scroll-bar-overflow">
        <span className="text-3xl bold">{header}</span>
      {children}
      </div>
  </div>
</>
  )

export default FormModal

