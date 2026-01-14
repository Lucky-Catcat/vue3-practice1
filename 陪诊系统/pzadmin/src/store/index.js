
import { createStore } from 'vuex'
import menu from './menu'
import createPersist from 'vuex-persistedstate'

export default createStore({
    plugins: [new createPersist({
        key: 'pz_v3pz'
    })],
    modules: {
        menu
    }
})