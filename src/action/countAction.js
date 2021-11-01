export default function clickAction(x, y, symbol) {
    return {
        type: 'click',
        x: x,
        y: y,
        increase: symbol === 0 ? 1 : -1
    }
}