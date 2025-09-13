export const api = {
  contacts: "http://localhost:8080/api/v1/appeal",
  signIn: "http://localhost:8080/api/v1/auth/login",
  signUp: "http://localhost:8080/api/v1/auth/register",
  verification: (token) => `http://localhost:8080/api/v1/auth/verify?token=${token}`
}