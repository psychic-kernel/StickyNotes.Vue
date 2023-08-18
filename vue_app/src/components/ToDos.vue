<template>
    <main>
        <form @submit.prevent="addTodo()">
            <textarea id="todoInput" 
                v-model="newTodo"
                style="border: none;"  
                cols="30" rows="10">
            </textarea>
            <input type="submit" value="Submit"/>
        </form>
       <ul id="todosDisplay">
            <li v-for="(todo, index) in storedTodos" 
                :key="index" 
                :class="{'done': todo.done }"
            >

                {{ todo.text }}

                <input type="button"
                    value="Remove"
                    @click="removeTodo(todo)"
                />
            </li>
       </ul>

    </main>
</template>

<script>

export default {
    data(){
        return {
            newTodo: '',
            hideCompleted: false,
            storedTodos: JSON.parse(localStorage.getItem('storedTodos')) || []
        }
    },
    watch: {
        storedTodos: {  
            //  still in localStorage "sdfsdfsdf"
            handler(newTodos){
                localStorage.setItem('storedTodos', JSON.stringify(newTodos));
            },
            deep: true
        },
    },
    computed: {
        filteredTodos(){
            return this.hideCompleted ? 
            this.storedTodos.filter(t => !t.done): this.storedTodos; 
        },
        
    },
    methods: {
        addTodo(){
            // this.todos.push({id: id++, text: this.newTodo, done: false });
            // this.storeLocally(this.newTodo); 
            // this.newTodo = '';
            const newId = this.storedTodos.length > 0 ? this.storedTodos[this.storedTodos.length - 1].id + 1: 1;
            this.storedTodos.push({id: newId, text: this.newTodo, done: false});
            this.newTodo = '';
        },
        removeTodo(todo){
            this.storedTodos = this.storedTodos.filter(t => t !== todo);
        },
    }
}
</script>
<style scoped>
.done {
    text-decoration: line-through;
    list-style-type: circle;
}
#todosDisplay {
    color: var(--color-fire);
}
</style>
