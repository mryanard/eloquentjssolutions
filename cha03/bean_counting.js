const countChar = (word, char) => {
	let counter = 0;
  	for(let i = 0; i < word.length; i++){
  	if(word[i] === char)counter++;
  }
  
  return counter;
}

const countBs = (word) => {
  return countChar(word, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4