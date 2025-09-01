import {createPortal} from "react-dom";

function MailSend() {
  return createPortal(
    <></>,
    document.querySelector("#mail-send")
  )
}

export default MailSend