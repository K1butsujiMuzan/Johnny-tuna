import Header from "@components/Header/Header";
import {Route, Routes} from "react-router";
import Main from "./pages/Main"
import Stocks from "@/pages/Stocks";
import Delivery from "@/pages/Delivery";
import Contacts from "@/pages/Contacts";
import Login from "@/pages/Login";
import Footer from "@components/Footer/Footer";
import Information from "@/pages/Information";
import About from "@/pages/About";

function App() {
  return (
    <>
      <Header></Header>
      <main></main>
      <Footer/>
      <Routes>
        <Route path={"/"} element={<Main/>}></Route>
        <Route path={"/stocks"} element={<Stocks/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/delivery"} element={<Delivery/>}></Route>
        <Route path={"/contacts"} element={<Contacts/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/information"} element={<Information/>}></Route>
      </Routes>
    </>
  )
}

export default App
