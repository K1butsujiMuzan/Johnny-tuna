import { api } from '@/services/api'

export const contactsForm = async (email, message, name, theme) => {
  const response = await fetch(api.contacts, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      message: message,
      name: name,
      theme: theme,
    }),
  })

  return await response.json()
}
