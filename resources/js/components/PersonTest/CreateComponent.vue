<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Name:</label>
            <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter name">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Age:</label>
            <input type="number" v-model="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter age">
        </div>
        <div class="form-group mb-3">
            <label for="exampleInputEmail1">Job:</label>
            <input type="text" v-model="job" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter job">
        </div>

        <button @click.prevent="addPerson" class="btn btn-primary">Add person</button>
    </form>
</template>

<script setup>
import {ref} from "vue";
import usePeople from "../../Composables/usePeople.js";

const {getPeople} = usePeople();
const name = ref(null);
const age = ref(null);
const job = ref(null);

function addPerson() {
    axios.post('/api/people',
        {
            name: name.value,
            age: age.value,
            job: job.value,
        }).then(res => {
        name.value = null;
        age.value = null;
        job.value = null;
        getPeople();

    })
}
</script>

<style scoped>

</style>
