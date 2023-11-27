import { createStore } from 'vuex'
import Person from './modules/person.js'
export default createStore({
    modules:{
        Person
    },
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
