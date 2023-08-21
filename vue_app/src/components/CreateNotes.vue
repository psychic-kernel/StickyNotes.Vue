<template>
    <main>
        <form @submit.prevent="addNote()">
            <textarea id="todoInput" 
                v-model="newNote"
                style="border: none;"  
                cols="30" rows="10">
            </textarea>
            <input type="submit" value="Submit"/>
        </form>
       <ul id="todosDisplay">
            <li v-for="(note, index) in storedNotes" 
                :key="index.id" 
                :class="{'done': note.done }">
                {{ note.text }}
                <br>
                <input id="removeBtn" type="button"
                    value="Remove"
                    @click="deleteNote(note)"
                />
                <br>
            </li>
       </ul>
       

    </main>
</template>

<script>
import { ref, onMounted, watch } from 'vue';



export default { 

    setup(){ 

        const newNote = ref('');
        const hideCompleted = ref(false);
        const storedNotes = ref(JSON.parse(localStorage.getItem('storedNotes')) || []);


        watch(storedNotes, (newNote) => {
            localStorage.setItem('storedNotes', JSON.stringify(newNote));
        },{ deep: true});
        //Methods
        const addNote = () => {
        const newId = storedNotes.value.length > 0 ?
        storedNotes.value[storedNotes.value.length - 1].id + 1 : 
        1;
        storedNotes.value.push({id: newId, text: newNote.value, done: false});
        newNote.value = '';
        };
        const deleteNote = (index) => {
            storedNotes.value = storedNotes.value.filter( t =>
            t !== index); 
        }
        return {newNote, hideCompleted, storedNotes, addNote, deleteNote, };
    }
};


</script>
<style scoped>
.done {
    text-decoration: line-through;
    list-style-type: circle;
}
#todosDisplay {
    color: var(--color-fire);
}
#removeBtn {
    position: relative;
    border: none;
    background-color: var(--color-danger);
}
#deleteBtn{
    position: relative;
    border: none;
    background-color: var(--color-warning);
}
</style>
