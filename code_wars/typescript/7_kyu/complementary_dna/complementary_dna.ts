export class Kata {
	static dnaStrand(dna: string) {
		const dictionary: Record<string, string> = {
			A: "T",
			T: "A",
			C: "G",
			G: "C",
		};

		const complement = dna.split("").map((l) => dictionary[l]).join("");
		console.log(complement);
		return complement;
	}
}

console.log(Kata.dnaStrand("ATTGC")); // return "TAACG"
