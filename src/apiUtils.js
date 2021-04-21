import {isLoggedIn, getToken} from "./facades/userFacade"

function makeOptions(method, addToken, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  }
  if (addToken && isLoggedIn()) {
    opts.headers["x-access-token"] = getToken()
  }
  if (body) {
    opts.body = JSON.stringify(body)
  }
  return opts
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({
      status: res.status,
      fullError: res.json(),
    })
  }
  return res.json()
}

// Give a useState setter function as the second paramater.
function handleError(error, setError) {
  if (error.status) {
    error.fullError.then(data => setError(data))
  } else {
    setError({code: 500, message: "Some unknown error happended"})
  }
}

function fetchData(url, method = "GET", body) {
  return fetch(url, makeOptions(method, true, body)).then(handleHttpErrors)
}

const https = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
}

export {fetchData, https, handleError}
