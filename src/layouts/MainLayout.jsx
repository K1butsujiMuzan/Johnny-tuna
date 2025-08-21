import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import {Outlet} from "react-router-dom";

function MainLayout({children}) {
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