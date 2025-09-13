import {api} from "@/Services/api";

export const contactsForm = async(email, message, name, theme) => {
  const response = await fetch(api.contacts, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      message: message,
      name: name,
      theme: theme
    })
  })
  const data = await response.json()

  return data
}