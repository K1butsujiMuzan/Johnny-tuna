import "./Logo.css"
import logo from "@assets/icons/MainIcons/Logo.svg";
import {Link} from "react-router";
import {scrollTop} from "@/scripts/Functions/toTop";
import {useBurger} from "@/contexts/IsBurgerOpen";

function Logo({className}) {
  const {setIsBurgerOpen, isBurgerOpen} = useBurger()
  return(
    <Link
      to={"/"}
      aria-label={"На главную"}
      onClick={() => {
        scrollTop()
        if(isBurgerOpen) {
          setIsBurgerOpen(false)
        }
      }}
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