//Chessboard

let cha = " ";
let chessboard = "";
let size = 10;
let sizeT = size*size;

for(let i=0; i < sizeT; i++){
    		
  	if(i%size == 0 && i!=0){
      chessboard += "\n";
      if(size%2 == 0){
      	if(cha === " ")
      		cha = "#";
  		else
              cha = " " 
        }
    }
  chessboard = chessboard + cha;
  	if(cha === " ")
      cha = "#";
  	else
      cha = " "  
}
console.log(chessboard);