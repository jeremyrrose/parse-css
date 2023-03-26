// this function is exported and used in index.js for testing
export default function parseCSS (cssString) {

    // split the string into an array of lines
    return cssString.split(";")
                // then "reduce" the array
                // "acc" is the accumulator, which is returned after the loop
                // "cur" is the current value (so each line)
                // whatever we return from the callback becomes the accumulator for the next loop!
                .reduce((acc,cur) => {
                    // split the current line into "property" and "value"
                    const [property, value] = cur.split(":")
                    // guard against empty or incomplete lines
                    if (property && value) {
                        // set the key and value in our accumulator
                        acc[property.trim()] = value.trim()
                    }
                    // return the accumulator for the next loop
                    return acc
                // IMPORTANT! the second argument for .reduce (the part after the comma)
                // sets the initial value for the accumulator
                // here it's {}, so we start with an empty object    
                },{})

}