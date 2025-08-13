import {createPortal} from "react-dom";

function HeaderModal({children}) {
  return createPortal(
    {children}
  ), document.querySelector("#header-modal")
}

export default HeaderModal