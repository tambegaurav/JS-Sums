// 3rd CHessboard pattern
// for (let i = 1; i <= 8; i++) {
//   for (let j = 1; j <= 8; j++) {
//     if (i % 2 != 0) {
//       chessPatternLine = chessPatternLine + ' ';
//     } else {
//       chessPatternLine = chessPatternLine + '#';
//     }
//     console.log(chessPatternLine);
//   }
//   console.log('\n');
// }
//let numberOfLines = Number(prompt("Enter number of squares size:"))
let chessPatternLine = '';
for (j = 1; j <= 8; j++) {
  for (let i = 1; i <= 8; i++) {
    if (j % 2 != 0) {
      i % 2 != 0 ? (chessPatternLine += '0 ') : (chessPatternLine += '# ');
    } else {
      i % 2 != 0 ? (chessPatternLine += '# ') : (chessPatternLine += '0 ');
    }
  }
  console.log(chessPatternLine);
  chessPatternLine = '';
}
