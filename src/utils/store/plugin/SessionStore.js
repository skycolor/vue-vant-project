import ParentStore from './ParentStore'

export default class SessionStore extends ParentStore {
  constructor() {
    super()
    this.store = window.sessionStorage
  }
}