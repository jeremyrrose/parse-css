import parseCSS from './parse-css.js'

const cssString = `
height: 80px;
background: yellow;
border: 2px solid grey;
padding: 20px 10px;
`

const expected = {
    height: '80px',
    background: 'yellow',
    border: '2px solid grey',
    padding: '20px 10px'
}

const result = parseCSS(cssString)

if (typeof result == 'string') {
    console.log("\n\x1b[31mYou're still returning a string!\x1b[0m")
} else if (!["height","background","border","padding"].every(k => result[k])) {
    console.log("\n\x1b[31mYour object keys don't match the expected result!\x1b[0m")
} else if (!["height","background","border","padding"].every(k => result[k] == expected[k])) {
    console.log("\n\x1b[31mYour object's values don't match the expected result!\x1b[0m")
} else {
    console.log("\n\x1b[32mNAILED IT!\x1b[0m")
}

console.log("\nExpected result:\n", expected)

console.log("\nYour result:\n", result)