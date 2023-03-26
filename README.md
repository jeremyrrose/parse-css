# Parse CSS

Your program has access to some normal CSS. It's a multi-line string that looks like this:

```css
height: 80px;
background: yellow;
border: 2px solid grey;
padding: 20px 10px;
```

Because you have a crazy plan you want to try in React, you need to turn it into a JavaScript object, like this:

```js
{
  height: '80px',
  background: 'yellow',
  border: '2px solid grey',
  padding: '20px 10px'
}
```

## Instructions

Edit the function in `parse-css.js` to produce the expected result.

Run `npm test` or `node index.js` to test.

## Hints

We already know CSS syntax. What is the logic? What separates one CSS declaration from the next? What separates the property from the value? Make JavaScript split up the CSS the same way your brain does! :)

You might want to create an empty object _before_ you start splitting up the string. You could start testing just by returning an empty object!

## References

- `.split()` ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)): Splits a string into an array of strings based on the split character you specify.
- `.trim()` ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)): Strips whitespace and newline characters from the beginning and end of a string.
- Object property accesors ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation)): Remember that `myObject.coolProp = 2` and `myObject["coolProp"] = 2` are synonymous!

