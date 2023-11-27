import {ref} from "vue";

export default () => {
    const people = ref([]);

    function getPeople() {
        axios.get('/api/people')
            .then(res => {
                people.value = res.data;

            })
            .catch(error => {

            })
            .finally();
    }

    return {
        getPeople,
        people
    }
};

