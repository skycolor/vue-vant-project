import LocalStore from './plugin/LocalStore'
import SessionStore from './plugin/SessionStore'

export default {
    localStore: new LocalStore(),
    sessionStore: new SessionStore()
}

