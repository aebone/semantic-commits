
function hello(name) {
    return `hello ${name}! you are cute!`
}

function bye() {
    return `bye. see you .-..`
}

function doSomethingImportant() {
    return `not important. kidding.`
}

module.exports = hello('Carlos')
module.exports = bye()
module.exports = doSomethingImportant()

