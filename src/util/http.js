// NPM imports

import axios from 'axios'

const baseURL = process.env.REACT_APP_API_BASE_URL

const allowedErrors = ['invalid_credentials']
const allowedURLs = ['/register']

const token = localStorage.getItem('token')
const caminoAxios = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : ''
  }
})

// axios wrapper to deal with common errors
export default async function (config) {
  try {
    // if nothing goes wrong, just return the request
    return await caminoAxios(config)
  } catch (error) {
    // unauthorized
    if (error && error.response && error.response.status === 401) {
      if (!token && window.location.pathname !== '/' && allowedURLs.includes(window.location.pathname) && allowedErrors.includes(error?.response?.data?.error?.message)) {
        window.location.href = '/'
      }
    }

    // just throw the error at the end
    throw error
  }
}
