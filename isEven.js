const isEven = (num) => {
  if (num == -1) return false;
  else if (num < 0) {
    return isEven(-num - 2);
  } else if (num != 0 && num != 1) {
    return isEven(num - 2);
  } else if (num == 0) return true;
  else if (num == 1) return false;
};

console.log(isEven(11));
// → true
console.log(isEven(-750));
// // → false
console.log(isEven(-1));

console.log(isEven(0));
