import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Stocks from '@/pages/Stocks'
import Delivery from '@/pages/Delivery'
import Contacts from '@/pages/Contacts'
import Login from '@/pages/Login'
import Information from '@/pages/Information'
import AboutUs from '@/pages/AboutUs'
import MainLayout from '@/layouts/MainLayout'
import Basket from '@/pages/Basket'
import Verification from '@/pages/Verification'
import Profile from '@/pages/Profile'
import { useEffect } from 'react'
import { authProfile } from '@/store/useProfileToken'
import { linkPath } from '@/constants/linkPath'

function App() {
  useEffect(() => {
    authProfile()
  }, [])

  return (
    <>
      <Routes>
        <Route path={linkPath.main} element={<MainLayout />}>
          <Route index element={<Main />}></Route>
          <Route path={linkPath.stocks} element={<Stocks />}></Route>
          <Route path={linkPath.about} element={<AboutUs />}></Route>
          <Route path={linkPath.delivery} element={<Delivery />}></Route>
          <Route path={linkPath.contacts} element={<Contacts />}></Route>
          <Route path={linkPath.information} element={<Information />}></Route>
          <Route path={linkPath.basket} element={<Basket />}></Route>
          <Route path={linkPath.profile} element={<Profile />}></Route>
        </Route>
        <Route path={linkPath.verify} element={<Verification />}></Route>
        <Route path={linkPath.login} element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
