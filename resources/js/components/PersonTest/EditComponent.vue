<template>
    <tr :class="isEdit ? '' : 'd-none'">
        <td>{{ person.id }}</td>
        <td><input type="text" v-model="personName" class="form-control"></td>
        <td><input type="number" v-model="personAge" class="form-control"></td>
        <td><input type="text" v-model="personJob" class="form-control"></td>
        <td><a @click.prevent="updatePerson(person.id)"
               class="btn btn-warning" href="#">Update</a></td>
    </tr>
</template>

<script setup>
import {ref ,defineProps,defineEmits} from "vue";
import usePeople from "../../Composables/usePeople.js";
const props=defineProps({
    person:{
        type:Object
    },
    isEdit:{
        type:Boolean,
        default:false
    },
    editPersonId:{
        type:Number,
    }
})
const {getPeople,people} = usePeople();
const emit = defineEmits(["update:editPersonId"]);
const personName = ref(props.person.name);
const personAge = ref(props.person.age);
const personJob = ref(props.person.job);
function updatePerson(id) {
    emit("update:editPersonId",null)
    axios.patch(`/api/people/${id}`,
        {
            name: personName.value,
            age: personAge.value,
            job: personJob.value,
        }).then(res => {
        getPeople();
    })
}
</script>

<style scoped>

</style>
