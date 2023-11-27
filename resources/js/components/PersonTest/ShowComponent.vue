<template>
    <tr :class="isEdit ? 'd-none' : ''">
        <td>{{ person.id }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td><a @click.prevent="changeEditPerson(person.id, person.name, person.age, person.job)"
               class="btn btn-success" href="#">Edit</a></td>
        <td><a @click.prevent="deletePerson(person.id)"
               class="btn btn-danger" href="#">Delete</a></td>
    </tr>
</template>

<script setup>
import { defineProps,defineEmits} from "vue";
import usePeople from "../../Composables/usePeople.js";
defineProps({
    person:{
        type:Object
    },
    isEdit:{
        type:Boolean,
        default:false
    },


})
const {getPeople} = usePeople();
const emit = defineEmits(["changeEditPersonId"]);
function changeEditPerson(id, name, age, job) {
    emit("changeEditPersonId", id, name, age, job)
}
function deletePerson(id) {
    axios.delete(`/api/people/${id}`)
        .then(getPeople())
}


</script>

<style scoped>

</style>
