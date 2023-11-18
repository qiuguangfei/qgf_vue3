import { defineStore } from 'pinia';
const useCountStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    },
    actions: {
        changeCount(value) {
            this.count = value + this.doubleCount
        }
    }
})
export default useCountStore
