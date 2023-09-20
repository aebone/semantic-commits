function hello(name) {
    return `hello ${name}! you are cute!`
}

function bye() {
    return `bye`
}

module.exports = hello('Carlos')
module.exports = bye()
