<script>
import { ref, watch } from 'vue';
    export default {
        setup(){

            const isActive = ref(false);
            const storedNotes = ref(JSON.parse(localStorage.getItem("storedNotes")) || []);
            const upDownClass = ref({ 'slide-down': !isActive, 'slide-up': isActive});

           

            const toggleNotes = () => {
               isActive.value = !isActive.value;
               console.log(!isActive.value);
               
            }
            
            return { isActive, storedNotes, upDownClass, toggleNotes }
        }
    }
</script>

<template>
    <div class="notes-display">
        <h4>Sticky Note</h4>

        <font-awesome-icon
            @click="toggleNotes()"
            class="fa-caret"
            :icon="['fas', 'caret-up']"
        />
            <div :class="upDownClass">
                <!-- :class="className[0]" -->
                <ul id="noteList">
                    <li v-for="(note, index) in storedNotes" :key="index.id">
                        {{ note.text }}
                    </li>
                </ul>
            </div>
    </div>
</template>
<style scoped>

.fa-caret {
    position: fixed;
    right: 0;
    top: 1em;
    width: 2em;
    height: 1em;
    padding: 5px;
}
.fa-caret:hover {
    background-color: var(--btn-hover-green);
    color: var(--color-charcoal);
    

}
.slide-down {
    animation-name: slideDown;
    animation-duration: 500ms;
    animation-timing-function: ease;


}
@keyframes slideDown {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(5em);
    }
}
.slide-up {
    animation-name: slideUp;
    animation-duration: 500ms;
    animation-timing-function: ease;

}
@keyframes slideUp{
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-5em);
    }
}

.notes-display ul {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    list-style-type:circle;
    padding: 10px;
}
.notes-display {
    position: fixed;
    top: 1rem;
    right: 0;
    color: var(--color-neon-green);
    background-color: var(--bg-color-nav);
    opacity: .9;
    border: 1px dotted grey;
    width: 300px;
    z-index: 1;

}

h4 {
    color: var(--color-fire);
    margin-top: 1em;
    margin-left: 1em;
}



</style>
