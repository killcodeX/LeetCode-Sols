/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

function matches(word, pattern) {
  let patternToWord = {}; // first map pattern to word to check sequence
  let wordToPattern = {}; // then, map word to pattern to confirm the sequence

  for (let i = 0; i < pattern.length; i++) {
    let ptt = pattern[i];
    let wrd = word[i];

    if (!patternToWord[ptt]) {
      patternToWord[ptt] = wrd;
    } else {
      if (patternToWord[ptt] != wrd) {
        return false;
      }
    }

    if (!wordToPattern[wrd]) {
      wordToPattern[wrd] = ptt;
    } else {
      if (wordToPattern[wrd] != ptt) {
        return false;
      }
    }
  }

  //console.log(patternToWord)
  //console.log(wordToPattern)

  return true;
}
var findAndReplacePattern = function (words, pattern) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    if (matches(words[i], pattern)) {
      res.push(words[i]);
    }
  }

  return res;
};
