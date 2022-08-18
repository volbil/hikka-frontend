import axios from 'axios'

const apiJoin = (username, email, password) => {
  return axios.post('https://api.hikka.io/auth/join', {
    username, email, password
  })
}

export default apiJoin
