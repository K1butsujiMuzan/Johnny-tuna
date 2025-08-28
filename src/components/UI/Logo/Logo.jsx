import "./Logo.css"
import logo from "@assets/icons/Logo.svg";
import {Link} from "react-router";
import {scrollTop} from "@/scripts/toTop";

function Logo({className}) {
  return(
    <Link
      to={"/"}
      aria-label={"На главную"}
      onClick={scrollTop}
    >
      <img
        className={className}
        src={logo}
        alt={"Logo"}
        height={35.96}
        width={442.04}
      />
    </Link>
  )
}

export default Logo