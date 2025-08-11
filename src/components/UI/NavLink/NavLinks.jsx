import './NavLinks.css'
import {Link} from "react-router";

function NavLinks({to, children}) {
  return(
    <li className={"header__top-item"}>
      <Link className={"header__top-link"} to={to}>{children}</Link>
    </li>
  )
}
export default NavLinks