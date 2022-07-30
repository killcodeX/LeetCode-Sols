# Greatest common divisor

GCD x for frequencies of all the numbers ensures:

each number has at least x occurrences
All numbers have an occurrence count of x \* y. (y is irrelevant)

```javascript
function gcd(a, b) {
  if (b == 0) return a;

  return gcd(b, a % b);
}
```
