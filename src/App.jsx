import Header from "@components/Header/Header";
import {Route, Routes} from "react-router";
import Main from "./pages/Main"
import Stocks from "@/pages/Stocks";
import Delivery from "@/pages/Delivery";
import Contacts from "@/pages/Contacts";
import Login from "@/pages/Login";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path={"/"} element={<Main/>}></Route>
        <Route path={"/stocks"} element={<Stocks/>}></Route>
        <Route path={"/delivery"} element={<Delivery/>}></Route>
        <Route path={"/contacts"} element={<Contacts/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
