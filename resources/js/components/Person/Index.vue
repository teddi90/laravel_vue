<template>
    <div>
        <table class="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people" :key="person.id">
                <tr>
                    <th scope="row">{{ person.id }}</th>
                    <td>
                        <router-link :to="{name:'people.show', params:{id:person.id}}">{{ person.name }}</router-link>
                    </td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link class="btn btn-success"
                                     :to="{name:'people.edit', params:{id:person.id}}">Edit
                        </router-link>
                    </td>
                    <td>
                        <button @click="store.dispatch('deletePerson',person.id)" class="btn btn-danger">Delete</button>
                    </td>

                </tr>
            </template>

            </tbody>
        </table>
    </div>
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
const store= useStore();
// const people = ref([]);

// function deletePerson(id) {
//     axios.delete(`api/people/${id}`)
// }

// function getPeople() {
//     axios.get('/api/people')
//         .then(res => {
//             people.value = res.data.data;
//         })
// }
const people=computed(()=>{
    return store.getters.people;
})

onMounted(() => {
    // getPeople();
    store.dispatch('getPeople')

})

</script>

<style scoped>

</style>
