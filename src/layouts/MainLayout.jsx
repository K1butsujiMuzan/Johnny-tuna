import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import {Outlet} from "react-router-dom";
import {IsBurgerOpen} from "@/contexts/IsBurgerOpen";

function MainLayout() {
  return(
    <>
      <IsBurgerOpen>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </IsBurgerOpen>
    </>
  )
}

export default MainLayout