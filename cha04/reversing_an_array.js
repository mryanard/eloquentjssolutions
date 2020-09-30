//Reversing An Array

const reverseArray = (arr) => {
	let newArr = [];
  	for(let i = arr.length - 1; i >= 0; i--)
      newArr.push(arr[i]);
  	return newArr;
}

const reverseArrayInPlace = (arr) => {
	let tmp = 0;
  	for(let i = 0; i < arr.length/2; i++){
    	tmp = arr[i];
      	arr[i] = arr[arr.length-1-i];
      	arr[arr.length-1-i] = tmp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]