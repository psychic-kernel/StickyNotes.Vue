import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, title: 'Qty'}),
    getter: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    },
});
