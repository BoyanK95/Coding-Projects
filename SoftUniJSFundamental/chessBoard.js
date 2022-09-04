function solve(n) {
  let color = `class="black"`;

console.log(` <div class="chessboard">`);
  for (let div = 1; div <= n; div++) {
    console.log(` <div>`);
    for (let span = 1; span <= n; span++) {
      console.log(`     <span ${color}></span>`);
      if (color === `class="black"`) {
        color = `class="white"`;
      }else{
        color = `class="black"`;
      }
    }
    console.log(` </div>`);
  }
  console.log(`</div>`);
}

solve(3);
