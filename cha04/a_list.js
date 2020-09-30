//A list

const arrayToList = (arr) => {
    let list = null;
    
  for ( let i = arr.length - 1; i >= 0; i--){
      list = {
           value: arr[i],
            rest: list
      };
  }
    return list;
}

const listToArray = (nlist) => {
    let arr = [];
  while(nlist.rest != null){
      arr.push(nlist.value);
      nlist = nlist.rest;
 }
arr.push(nlist.value);
return arr;
}

const prepend = (element, list) => {
  let newList = {
      value: element,
        rest: list
  };
return newList;
}

function nth( list, position ){
  if(position == 0){
      return list.value;
  }
    else{
      return nth(list.rest, position - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20