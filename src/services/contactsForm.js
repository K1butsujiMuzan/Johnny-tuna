import { postApi } from '@/services/api'

export const contactsForm = async (email, message, name, reason, theme) => {
  const response = await fetch(postApi.contacts, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      message: message,
      name: name,
      reason: reason,
      theme: theme,
    }),
  })

  return await response.json()
}
