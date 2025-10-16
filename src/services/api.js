const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1"

export const postApi = {
  contacts: `${baseUrl}/appeal`,
  signIn: `${baseUrl}/auth/login`,
  signUp: `${baseUrl}/auth/register`,
  updateEmail: `${baseUrl}/profile/update/email`,
  updateLogin: `${baseUrl}/profile/update/login`,
  recoverEmail: `${baseUrl}/auth/password/reset/req`,
  recoverCode: `${baseUrl}/auth/password/reset/verify`,
  recoverPassword: `${baseUrl}/auth/password/reset`,
}

export const getApi = {
  verification: (token) => `${baseUrl}/auth/verify?token=${token}`,
  checkProfile: `${baseUrl}/auth/verify/user`,
  getProfileData: `${baseUrl}/profile/info`,
  getCategories: `${baseUrl}/categories/get`,
  getProducts: `${baseUrl}/products/all`
}