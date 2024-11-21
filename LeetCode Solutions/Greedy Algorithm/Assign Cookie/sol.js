/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const greed = g.sort((a, b) => a - b); // sorted beacuse we need to start satisfying children will low greed
  const cookie = s.sort((a, b) => a - b); // sorted because we need to find min cookie which can make child greed content
  let cont = 0;
  let lowG = 0;
  let lowC = 0;
  while (lowG < greed.length && lowC < cookie.length) {
    if (greed[lowG] <= cookie[lowC]) {
      // if current cookie can satisfy greed then we increase content
      cont++;
      lowG++;
      lowC++;
    } else if (greed[lowG] > cookie[lowC]) {
      lowC++; // if greed is greater than current cookie, then move to next cookie
    } else {
      lowG++; // if cookie is greater than current greed, then move to next greed
    }
  }

  return cont;
};
