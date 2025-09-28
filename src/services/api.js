export const api = {
  contacts: "http://localhost:8080/api/v1/appeal",
  signIn: "http://localhost:8080/api/v1/auth/login",
  signUp: "http://localhost:8080/api/v1/auth/register",
  verification: (token) => `http://localhost:8080/api/v1/auth/verify?token=${token}`,
  checkProfile: "http://localhost:8080/api/v1/auth/verify/user",
  getProfileData: "http://localhost:8080/api/v1/profile/info",
  updateEmail: "http://localhost:8080/api/v1/profile/update/email",
  updateLogin: "http://localhost:8080/api/v1/profile/update/login",
  recoverEmail: "http://localhost:8080/api/v1/auth/password/reset/req",
  recoverCode: "http://localhost:8080/api/v1/auth/password/reset/verify",
  recoverPassword: "http://localhost:8080/api/v1/auth/password/reset",
  categories: "http://localhost:8080/api/v1/categories/get"
}