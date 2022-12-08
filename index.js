// Code your solutions in this file
function writeCards(names, event) {
    const result = [];
    for (let i = 0; i < names.length; i++) {
        result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return result;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n -= 1;
    }
}