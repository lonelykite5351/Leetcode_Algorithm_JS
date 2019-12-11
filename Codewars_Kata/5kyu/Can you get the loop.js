// https://www.codewars.com/kata/can-you-get-the-loop/javascript

function loop_size(node) {
    let loop = []
    while(node && loop.indexOf(node) < 0){
        loop.push(node)
        node = node.next
    }
    let firstIndex  = Math.max(0, loop.indexOf(node))
    return loop.length - firstIndex
}
console.log(loop_size(11))