
function DNAStrand(dna){
  let sequence = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  }
  return dna.replace(/A|T|G|C/g, function(matched){
    return sequence[matched];
  });
}
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"