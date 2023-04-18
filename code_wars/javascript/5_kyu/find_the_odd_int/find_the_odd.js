function findOdd(A) {
  const allNumbers = [...new Set(A)];

  for (let i = 0; i < allNumbers.length; i+= 1) {
    const currentN = allNumbers[i]
    let times_appeared = 0;
    for (let j = 0; j < A.length; j += 1) {
      if (currentN === A[j]) times_appeared+= 1;
    }

    if (times_appeared % 2 > 0) return currentN;
  }
}
