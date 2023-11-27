<template>
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
            <th scope="col">Edit</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="person">
            <th scope="row">{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
            <td>
                <router-link class="btn btn-success"
                             :to="{name:'people.edit', params:{id:person.id}}">Edit
                </router-link>
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script setup>
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

const store=useStore();
const route = useRoute();

// function getPerson(){
//     axios.get(`/api/people/${route.params.id}`)
//         .then(res=>{
//             console.log(res);
//             person.value=res.data.data;
//         })
// }

const person=computed(()=>{
    return store.getters.person;
});
onMounted(()=>{
    // getPerson();
    store.dispatch('getPerson', route.params.id);
})

</script>

<style scoped>

</style>
