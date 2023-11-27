<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="store.getters.person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="store.getters.person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="store.getters.person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!store.getters.isDisabled" type="submit" @click.prevent="createPerson(store.getters.person)" value="Add"
                   class="btn btn-primary">
        </div>
    </div>
</template>

<script setup>
import { onMounted} from "vue";
import router from "../../router.js";
import {useStore} from "vuex";

const store = useStore();

// const person = store.getters.person;

// const person=ref({
//     name:null,
//     age:null,
//     job:null,
//
// })
function createPerson(person) {
    store.dispatch('storePerson', person)
    router.push({name: 'people.index'})
}

onMounted(() => {
    store.commit('setPerson', {name: null, age: null, job: null});
});
// const personName = ref(null);
// const personAge = ref(null);
// const personJob = ref(null);

// function storePerson() {
//     axios.post('/api/people',
//         {
//             name: personName.value,
//             age: personAge.value,
//             job: personJob.value,
//         }).then(res => {
//         router.push({name: 'people.index'})
//
//     });
// }

// const isDisabled = computed(() => {
//     return person.name && person.age && person.job;
// });


</script>
<style scoped>

</style>
