const min = (x,y) => {
	if(x < y)
      return x;
  else if(x > y)
    return y;
  else
    return "Equal numbers";
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10