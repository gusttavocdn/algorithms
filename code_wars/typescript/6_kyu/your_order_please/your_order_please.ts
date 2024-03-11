export function order(words: string): string {
	if (!words) return "";

	const orderedWords: string[] = [];
	const splittedWords = words.split(" ");

	splittedWords.forEach((word) => {
		for (const char of word) {
			const digit = isDigit(char);
			if (digit != 0) {
				orderedWords[digit - 1] = word;
				return;
			}
		}
	});

	return orderedWords.join(" ");
}

function isDigit(digit: string): number {
	if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(digit))
		return parseFloat(digit);
	return 0;
}

// console.log(order("is2 Thi1s T4est 3a"));
