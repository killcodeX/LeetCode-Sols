var decodeString = function (s) {
  let countStack = [];
  let stringStack = [];
  let currentString = "",
    k = "";

  for (let i = 0; i < s.length; i++) {
    let t = s[i];

    if (t === "]") {
      let string = [];

      let times = countStack.pop();
      let prevStr = stringStack.pop();

      for (let j = 0; j < times; j++) {
        string.push(currentString);
      }
      currentString = prevStr + string.join("");
    } else if (!Number.isNaN(Number(t))) {
      k += t;
    } else if (t === "[") {
      countStack.push(k);
      stringStack.push(currentString);
      // reset currentString and k
      currentString = "";
      k = 0;
    } else {
      currentString = currentString + t;
    }
  }

  return currentString;
};
