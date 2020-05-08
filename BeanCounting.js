const countBs = (inputStr) => {
  let countOfB = 0;
  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] == 'b') {
      countOfB += 1;
    }
  }
  return countOfB;
};

const countChar = (inputStr, char) => {
  let countOfChar = 0;
  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] == char) {
      countOfChar += 1;
    }
  }
  return countOfChar;
};

console.log(countBs('BbBaabbbbbbbbbbbbbabB'));
console.log(countChar('kakkerkkkkkklak', 'k'));
