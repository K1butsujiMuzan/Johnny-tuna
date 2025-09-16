import Header from "@components/Containers/Header/Header";
import Footer from "@components/Containers/Footer/Footer";
import {Outlet} from "react-router-dom";

function MainLayout() {
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