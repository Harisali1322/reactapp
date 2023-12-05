import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Userregistration from './Screens/Userregistration'
import Userget from './Screens/Userget'
import Eddituser from './Screens/Eddituser'

const App = () => {
  return (
   <>
   <Routes>
   <Route path='/' element={<Userregistration/>}/>
   <Route path='/usersget' element={<Userget/>}/>
   <Route path='/edituser/:id' element={<Eddituser/>}/>
   
   </Routes>
   </>
  )
}

export default App
