const USER_BASE = "http://localhost:8080/security/api"
const INFO_BASE = "http://localhost:8080/security/api/info/"

const USER = {
  LOGIN: `${USER_BASE}/login`,
}

const INFO = {
  USER: `${INFO_BASE}/user`,
  ADMIN: `${INFO_BASE}/admin`,
  FETCH_MANY: `${INFO_BASE}/fetchMany`,
  FETCH_ONE: `${INFO_BASE}/fetchData`,
}

export {USER, INFO}
