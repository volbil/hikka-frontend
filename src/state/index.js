import { proxy, subscribe } from 'valtio'

const storedGlobalState = localStorage.getItem('globalState')
const globalState = proxy(JSON.parse(storedGlobalState) || {
  secret: null
})

subscribe(globalState, () => {
  localStorage.setItem('globalState', JSON.stringify(globalState))
})

export default globalState
