import { createStore, createLogger } from 'vuex'

const debug = import.meta.env.MODE !== 'production'

export default createStore({
    modules: {
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
