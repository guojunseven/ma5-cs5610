const defaultState = [
    [0, 0],
    [0, 0]
]

export default function gridStateReducer(state = defaultState, action) {
    if (action.type === 'click') {
        if (state[action.x][action.y] == 0) {
            state[action.x][action.y] = 1;
        } else {
            state[action.x][action.y] = 0;
        }
        return [...state];
    }
    return state;
}