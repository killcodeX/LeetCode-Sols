# Sliding Window Pattern

## How to approach a window size problem

### Fixed Window Size

In fixed windows size we are always provided with fixed subarray/substring size, so

- Initially we start window variables, `start` and `end` at starting index,
- Then we will keep on increasing window size (increasing `end++` varibale) until we reach the given wondow size (`if(end-start+1 < k) `),
- Once we reach the window size (`if(end-start+1 == k) `), now we try to maintain the window size,
- After hitting window size, when we increase `end` variable we have to increase `start` variable accordingly.

### Variable Window Size

In this problem, instead of subarray size we are given some other condition like largest sum or product

- Initially we start window variables, `start` and `end` at starting index,
- We would first try to satisfy the given condition, once the given condition is met, it means we have met with oour window size.
- In Variable Window Size, size of window doesnt matter but the condition at which it is met,
- Now comes the tricky part, remmber in varibale window size we are never concerned with window size but rather with condtion given,
- Now how we will mantain the window size, it purely depnds on elemnts given or when we are hitting the condition.

## Examples

### Minimum window

```Java
public String minWindow(String s, String t) {
    int [] map = new int[128];
    for (char c : t.toCharArray()) {
      map[c]++;
    }
    int start = 0, end = 0, minStart = 0, minLen = Integer.MAX_VALUE, counter = t.length();
    while (end < s.length()) {
      final char c1 = s.charAt(end);
      if (map[c1] > 0) counter--;
      map[c1]--;
      end++;
      while (counter == 0) {
        if (minLen > end - start) {
          minLen = end - start;
          minStart = start;
        }
        final char c2 = s.charAt(start);
        map[c2]++;
        if (map[c2] > 0) counter++;
        start++;
      }
    }

    return minLen == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);
  }
```

### Longest Substring - at most K distinct characters

```javascript
function kUniqueChar(s, k) {
  let start = 0;
  let end = 0;
  let longest = 0;
  let map = new Map();

  while (end < s.length) {
    if (!map.has(s[end])) {
      map.set(s[end], 1);
    } else {
      map.set(s[end], map.get(s[end]) + 1);
    }

    if (map.size > k) {
      while (map.size > k) {
        if (map.get(s[start]) > 1) {
          map.set(s[start], map.get(s[start]) - 1);
        } else {
          map.delete(s[start]);
        }
        start++;
      }
      end++;
    } else if (map.size == k) {
      longest = Math.max(longest, end - start + 1);
      end++;
    } else {
      end++;
    }
  }

  return longest;
}

let str = "ababcbcca";

let res = kUniqueChar(str, 2);

console.log("final answer --->", res);
```

### Longest Substring - at most 2 distinct characters

```Java
public int lengthOfLongestSubstringTwoDistinct(String s) {
    int[] map = new int[128];
    int start = 0, end = 0, maxLen = 0, counter = 0;

    while (end < s.length()) {
      final char c1 = s.charAt(end);
      if (map[c1] == 0) counter++;
      map[c1]++;
      end++;

      while (counter > 2) {
        final char c2 = s.charAt(start);
        if (map[c2] == 1) counter--;
        map[c2]--;
        start++;
      }

      maxLen = Math.max(maxLen, end - start);
    }

    return maxLen;
  }
```

### LongestSubstring - without repeating characters

```Java
public int lengthOfLongestSubstring2(String s) {
    int[] map = new int[128];
    int start = 0, end = 0, maxLen = 0, counter = 0;

    while (end < s.length()) {
      final char c1 = s.charAt(end);
      if (map[c1] > 0) counter++;
      map[c1]++;
      end++;

      while (counter > 0) {
        final char c2 = s.charAt(start);
        if (map[c2] > 1) counter--;
        map[c2]--;
        start++;
      }

      maxLen = Math.max(maxLen, end - start);
    }

    return maxLen;
  }
```

### LongestSubstring - without repeating characters (Part 2)

1. Use two pointers: start and end to represent a window.
2. Move end to find a valid window.
3. When a valid window is found, move start to find a smaller window.

To check if a window is valid, we use a map to store (char, count) for chars in t. And use counter for the number of chars of t to be found in s. The key part is m[s[end]]--;. We decrease count for each char in s. If it does not exist in t, the count will be negative.

To really understand this algorithm, please see my code which is much clearer, because there is no code like if(map[s[end++]]++>0) counter++;.

```Java
string minWindow(string s, string t) {
	unordered_map<char, int> m;
	// Statistic for count of char in t
	for (auto c : t) m[c]++;
	// counter represents the number of chars of t to be found in s.
	size_t start = 0, end = 0, counter = t.size(), minStart = 0, minLen = INT_MAX;
	size_t size = s.size();

	// Move end to find a valid window.
	while (end < size) {
		// If char in s exists in t, decrease counter
		if (m[s[end]] > 0)
			counter--;
		// Decrease m[s[end]]. If char does not exist in t, m[s[end]] will be negative.
		m[s[end]]--;
		end++;
		// When we found a valid window, move start to find smaller window.
		while (counter == 0) {
			if (end - start < minLen) {
				minStart = start;
				minLen = end - start;
			}
			m[s[start]]++;
			// When char exists in t, increase counter.
			if (m[s[start]] > 0)
				counter++;
			start++;
		}
	}
	if (minLen != INT_MAX)
		return s.substr(minStart, minLen);
	return "";
}
```

The code above costs 76ms. If we change the first line unordered_map<char, int> m; to vector<int> m(128, 0);, it costs 12ms.
