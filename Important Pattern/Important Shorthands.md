# Some Important Shorthand in JavaScript

## Push object keys and values in a Array

```javascript
let obj1 = { 1: 6, 3: 9, 4: 5 };
let arr = [];

Object.entries(obj1).map((item) => arr.push([item[0] - "0", item[1]]));

//[[1,6],[3,9],[4,5]]
```
