import React, { createContext } from 'react'
import { useState } from 'react'
export const dataContext = createContext()
const UserContext = ({children}) => {
  const [input, setInput] = useState('')

    let data = {
         input,
         setInput
    }
  return (
   
     <dataContext.Provider value={data}>
         {children}
     </dataContext.Provider>
   
  )
}

export default UserContext
