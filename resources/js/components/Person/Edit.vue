<template>
    <div class="w-25" v-if="store.getters.person.name">
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
            <input :disabled="!store.getters.isDisabled"
                   type="submit"
                   @click.prevent="updatePerson(store.getters.person)"
                   value="Update"
                   class="btn btn-warning">
        </div>
    </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import router from "../../router.js";
import {useRoute} from "vue-router";
import {useStore} from "vuex";

const store = useStore();
const route = useRoute()

// function getPerson(){
//     axios.get(`/api/people/${route.params.id}`)
//         .then(res=>{
//             personName.value=res.data.data.name;
//             personAge.value=res.data.data.age;
//             personJob.value=res.data.data.job;
//         })
// }
// const person = computed(() => {
//     return store.getters.person;
// })
// const isDisabled = computed(() => {
//     return person.value.name && person.value.age && person.value.job;
// });
// function updatePerson(){
//     axios.patch(`/api/people/${route.params.id}`,
//         {
//             name:personName.value,
//             age:personAge.value,
//             job:personJob.value,
//         }).then( res=>{
//         router.push({name:'people.show', params:{id:route.params.id}});
//
//     });
// }
function updatePerson(person){
    store.dispatch('updatePerson',person)
    router.push({name:'people.show', params:{id:route.params.id}});
}
onMounted(() => {
    store.dispatch('getPerson', route.params.id);
    // getPerson();
})

</script>
<style scoped>

</style>
