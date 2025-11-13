import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import Stocks from '@/pages/Stocks/Stocks'
import Delivery from '@/pages/Delivery/Delivery'
import Contacts from '@/pages/Contacts/Contacts'
import Login from '@/pages/Login/Login'
import Information from '@/pages/Information/Information'
import AboutUs from '@/pages/AboutUs/AboutUs'
import MainLayout from '@/layouts/MainLayout'
import Basket from '@/pages/Basket/Basket'
import Verification from '@/pages/Verification/Verification'
import Profile from '@/pages/Profile/Profile'
import { useEffect } from 'react'
import { authProfile } from '@/store/useProfileToken'
import { linkPath } from '@/config/links.data'
import { getCategories } from '@/store/useCategories'
import { getProducts } from '@/store/useProducts'
import Result from '@/pages/Result/Result'

function App() {
  useEffect(() => {
    authProfile()
    getCategories()
    getProducts()
  }, [])

  return (
    <>
      <Routes>
        <Route path={linkPath.main} element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path={linkPath.stocks} element={<Stocks />} />
          <Route path={linkPath.about} element={<AboutUs />} />
          <Route path={linkPath.delivery} element={<Delivery />} />
          <Route path={linkPath.contacts} element={<Contacts />} />
          <Route path={linkPath.information} element={<Information />} />
          <Route path={linkPath.basket} element={<Basket />} />
          <Route path={linkPath.profile} element={<Profile />} />
          <Route path={linkPath.result} element={<Result />} />
        </Route>
        <Route path={linkPath.verify} element={<Verification />} />
        <Route path={linkPath.login} element={<Login />} />
      </Routes>
    </>
  )
}

export default App
