import {State, Effect, Actions} from 'jumpstate'

/**
 *
 */
export default State({
    // Initial State
    initial: {
        count: 0
    },
    // Actions
    increment (state) {
        return {count: ++state.count}
    },
    decrement (state) {
        return {count: --state.count}
    }

})


// Create an asynchronous increment action
Effect('asyncIncrement', (time = 1000) => {
    console.log("HELP")
    setTimeout(() => Actions.increment(), time)
})