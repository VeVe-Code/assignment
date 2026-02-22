import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
   <>
    <nav></nav>
    <div>
<Outlet />
    </div>
   </>
  )
}

export default App