import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/user/Homepage'
import LoginPage from '../pages/user/LoginPage'


function UserRouter() {
  return (
    <Routes>
        <Route element={<Homepage/>} path='/*' />
        <Route element={<LoginPage/>} path='/login' />

    </Routes>
  )
}

export default UserRouter