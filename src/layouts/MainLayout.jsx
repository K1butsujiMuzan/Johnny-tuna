import Header from "@components/Containers/Header/Header";
import Footer from "@components/Containers/Footer/Footer";
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