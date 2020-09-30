//The Sum Of A Range

const range = (start,end, step=1) => {
    let tab = [];
        if(step > 0){
          for(let i=start; i <= end; i = i + step){
          tab.push(i);
      }
    }
    else if(step < 0){
            for(let i=start; i >= end; i = i + step){
          tab.push(i);
    }
}
    return tab;
  }
  
  const sum = (numbers) => {
      let somme = 0;
        for( let i=0; i<numbers.length; i++)
        somme += numbers[i];
    return somme;
  }
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55