import Header from "@components/Containers/Header/Header";
import Footer from "@components/Containers/Footer/Footer";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useProfileToken} from "@/store/useProfileToken";

function MainLayout() {
  const {auth} = useProfileToken()
  useEffect(() => {
    auth()
  }, [auth]);
  return(
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout