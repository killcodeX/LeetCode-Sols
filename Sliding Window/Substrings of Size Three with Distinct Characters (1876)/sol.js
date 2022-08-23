/*
Time Complexity - O(n)
Space Complexity - O(1)

Intuition:
valid substring = substring that contains at least of each a, b, and c
We want the minimum sized window (valid substring) every time we iterate though the string
The sum of letter count to the left of the window with 1 (the window itself) will give us the count of all valid substrings

Ex: s = 'aaabc'

	1. Minimum sized window here would be 'abc'
	2. The letter count prior to the window is 2 ('aa')
	3. 2 + 1 = 3 
*/
var numberOfSubstrings = function (s) {
  //Initialize an empty of array of size 3 filled with 0s
  //This array will hold the count a, b, and c in the window
  const a = new Array(3).fill(0);

  let start = 0; //leftmost index of window
  let end = 0; //rightmost index of window
  let ans = 0;

  const n = s.length;

  while (end < n) {
    //expand window
    //increment either a, b, or c each iteration
    a[s.charCodeAt(end) - 97]++;

    //While loop runs until the first valid substring is found
    //Once the first valid substring is found, the if statement below will run every iteration,
    //which in turn means that a new valid substring is found every iteration
    if (a[0] && a[1] && a[2]) {
      ans++;

      //Shrink the window while it's still valid, stopping before the iteration that will invalidate it
      while (a[s.charCodeAt(start) - 97] > 1) {
        a[s.charCodeAt(start) - 97]--; //Decrement the count of the letter that are no longer a part of the window
        start++; //Increment leftmost index of iwndow
      }

      //Add the count of characters preceding the current window
      //One extra character means one extra substring
      ans += start;
    }
    end++;
  }

  return ans;
};
