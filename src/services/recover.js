export const checkEmailData = async (email, api, body = null) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      ...body,
    }),
  })
  const data = await response.json()
  return data.error === null
}
