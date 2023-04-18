export class G964 {
  public static digPow = (n: number, p: number) => {
    const digits = n
      .toString()
      .split('')
      .map((x) => parseInt(x));
    let sumOfPows = 0;

    let i = 0;
    let j = p;
    while (i < digits.length) {
      sumOfPows = sumOfPows + Math.pow(digits[i], j);
      j += 1;
      i += 1;
    }

    if (sumOfPows < n) return -1;

    let k = 0;
    while (k * n < sumOfPows) k++;

    return sumOfPows == k * n ? k : -1;
  };
}

// export class G964 {

//   public static digPow = (n, p) => {
//       var x = n.toString().split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//       return x % n ? -1 : x / n;
//   }
// }
