"use strict"

export const getCookie = (name) => {
  for(const cookie of document.cookie.split("; ")) {
    const [cookieName, cookieValue] = cookie.split("=")
    if(decodeURIComponent(cookieName) === name) {
      return cookieValue
    }
  }
}