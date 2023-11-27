<template>
    <table class="table my-3">
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
        <template v-for="person in people" :key="person.name">
            <ShowComponent :person="person"
                           :isEdit="isEdit(person.id) "
                            @changeEditPersonId="changeEditPersonId"
            />
            <EditComponent :person="person"
                           :isEdit="isEdit(person.id)"
                           v-model:editPersonId="editPersonId"
            />
        </template>

        </tbody>
    </table>
</template>

<script setup>
import {onMounted, ref, getCurrentInstance} from "vue";
import usePeople from "../../Composables/usePeople.js";
import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";

const {getPeople, people} = usePeople();
const editPersonId = ref(null);
const personName = ref(null);
const personAge = ref(null);
const personJob = ref(null);


function isEdit(id) {
    return editPersonId.value === id
}
function changeEditPersonId(id, name, age, job) {
    editPersonId.value = id;
    personName.value = name;
    personAge.value = age;
    personJob.value = job;
}

onMounted(() => {
    getPeople();

})

</script>

<style scoped>

</style>
