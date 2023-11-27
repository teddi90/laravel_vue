import router from "../../router.js";
import {useRoute} from "vue-router";
export default {
    state: () => ({
        person: {
            name:null,
            age:null,
            job:null,
        },
        people: null,
    }),
    getters: {
        person: (state) => state.person,
        people: (state) => state.people,
        isDisabled:(state)=>{
            return state.person.name && state.person.age && state.person.job
        },


    },
    actions: {
        getPerson({commit}, id) {
            axios.get(`/api/people/${id}`)
                .then(res => {
                    commit('setPerson', res.data.data);
                })
        },
        getPeople({commit}) {
            axios.get('/api/people')
                .then(res => {
                    commit('setPeople', res.data.data);
                })
        },
        deletePerson({dispatch}, id) {
            axios.delete(`api/people/${id}`)
                .then(res => {
                    dispatch('getPeople')
                })
        },
        updatePerson({}, person) {
            axios.patch(`/api/people/${person.id}`,
                {
                    name: person.name,
                    age: person.age,
                    job: person.job,
                }).then(res => {
            });
        },
        storePerson({}, person) {
            axios.post('/api/people',
                {
                    name: person.name,
                    age: person.age,
                    job: person.job,
                }).then(res => {
            });
        }
    },
    mutations: {
        setPerson(state, person) {
            state.person = person;
        },
        setPeople(state, people) {
            state.people = people;
        }
    }
}
