// this function is exported and used in index.js for testing
export default function parseCSS (cssString) {

    // split the string into an array of lines
    const lines = cssString.split(";")

    // create our empty object
    const objToReturn = {}

    // loop through the lines
    lines.forEach(line => {

        // split each line at the colon
        // store the first part as "property", the second part as "value"
        const [property, value] = line.split(":")
        
        // guard against empty or incomplete lines
        if (property && value) {

            // use .trim to get rid of newlines and whitespace
            // use our "property" variable to set a new key in our object
            // the value is from our "value" variable
            objToReturn[property.trim()] = value.trim()
        }
    })

    return objToReturn
}