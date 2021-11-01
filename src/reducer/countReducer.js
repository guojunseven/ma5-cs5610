export default function count(state = 0, action) {
    if (action.type === 'click') {
        return state += action.increase;
    }
    return state;
}