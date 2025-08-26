import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main"
import Stocks from "@/pages/Stocks";
import Delivery from "@/pages/Delivery";
import Contacts from "@/pages/Contacts";
import Login from "@/pages/Login";
import Information from "@/pages/Information";
import About from "@/pages/About";
import MainLayout from "@/layouts/MainLayout";
import Basket from "@/pages/Basket";
import Recover from "@/pages/Recover";
import Verification from "@/pages/Verification";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainLayout/>}>
          <Route index element={<Main/>}></Route>
          <Route path={"/stocks"} element={<Stocks/>}></Route>
          <Route path={"/about"} element={<About/>}></Route>
          <Route path={"/delivery"} element={<Delivery/>}></Route>
          <Route path={"/contacts"} element={<Contacts/>}></Route>
          <Route path={"/information"} element={<Information/>}></Route>
          <Route path={"/basket"} element={<Basket/>}></Route>
        </Route>
        <Route path={"/verify/token/:token"} element={<Verification/>}></Route>
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/recover"} element={<Recover/>}></Route>
      </Routes>
    </>
  )
}

export default App
