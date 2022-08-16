# Some Important Shorthand in JavaScript

## Convert String number to Interger number

```javascript
let a = "1";

console.log(typeof a); // "string"

a = a - "0";

console.log(typeof a); // "number"
```

## Push object keys and values in a Array

```javascript
let obj1 = { 1: 6, 3: 9, 4: 5 };
let arr = [];

Object.entries(obj1).map((item) => arr.push([item[0] - "0", item[1]]));

//[[1,6],[3,9],[4,5]]
```

## Get Letter Combinations or permutation

```To read more, Recursion -> 17```

```javascript
let st = []
let res = []
function permute(string, index) {
  if (index === digits.length) {
    res.push(string);
    return;
  }

  for (let x of obj[st[index]]) {
    permute(string + x, index + 1);
  }
}
permute("", 0);

//[[1,6],[3,9],[4,5]]
```
