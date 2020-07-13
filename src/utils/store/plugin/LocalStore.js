import ParentStore from './ParentStore'

export default class LocalStore extends ParentStore {
  constructor() {
    super()
    this.store = window.localStorage
  }
}