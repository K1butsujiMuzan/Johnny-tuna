import "./Logo.css"
import logo from "@assets/icons/Logo.svg";
import {Link} from "react-router";

function Logo({place}) {
  return(
    <Link
      to={"/"}
    >
      <img
        className={place}
        src={logo}
        alt={"Logo"}
        height={35.96}
        width={442.04}
      />
    </Link>
  )
}

export default Logo