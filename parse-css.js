// this function is exported and used in index.js for testing
export default function parseCSS (cssString) {

    const lines = cssString.split(";")

    const objToReturn = {}

    lines.forEach(line => {

        const [key, value] = line.split(":")
        
        if (key && value) {
            objToReturn[key.trim()] = value.trim()
        }
    })

    // change the code here and make it return the correct object!
    return objToReturn
}