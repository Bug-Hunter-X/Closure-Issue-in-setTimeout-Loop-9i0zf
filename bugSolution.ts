function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(i) {
      setTimeout(() => {
        console.log(i);
      }, 0);
    })(i);
  }
}

printNumbers2(10); // Prints 1 to 10 correctly