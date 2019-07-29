var instructionSet='NEESSWWNESE';
var position= {
  i: 2, j: 3
};

var rowCount=5;
var columnCount= 8;

var matrix= prepareMatrix(rowCount, columnCount);
matrix[position.i][position.j]=1;

function moveNorth(){
  if((position.i-1)>=0){
  position.i--;
  matrix[position.i][position.j]=1;
  }

  while( (position.i-1)>=0 && matrix[position.i-1][position.j]===1){
    position.i--;
    matrix[position.i][position.j]=1;
  }
//   console.log('after moving north the new position is ');
//   console.log('row ', position.i+1);
//   console.log('column', position.j+1);
    
}

function moveSouth(){
  if(position.i!==(rowCount)){
    position.i++;
  matrix[position.i][position.j]=1;
  }
  while(matrix[position.i][position.j]===1 && position.i!==(rowCount)){
    position.i++;
 
  }
   // console.log('after moving south the new position is ');
     matrix[position.i][position.j]=1;
//   console.log('row ', position.i+1);
//   console.log('column', position.j+1);
  
}

function moveEast(){
  if(position.j!==(columnCount)){
      position.j++;
  matrix[position.i][position.j]=1;
  }
  while(matrix[position.i][position.j+1]===1 && position.j!==(columnCount)){
    position.j++;
    matrix[position.i][position.j]=1;
  }
//     console.log('after moving east the new position is ');
//   console.log('row ', position.i+1);
//   console.log('column', position.j+1);
}

function moveWest(){
  if((position.j)>=0){
        position.j--;
  matrix[position.i][position.j]=1;
   // console.log('called once');
  }

  while((position.j)>=0 && matrix[position.i][position.j]===1){
    position.j--;
//     console.log('position changed');
  }
//     console.log('after moving West the new position is ');
      matrix[position.i][position.j]=1
//   console.log('row ', position.i+1);
//   console.log('column', position.j+1);
    
}

function prepareMatrix(rowCount, columnCount){
  var array=[];
  for(let i=0;i<rowCount;i++){
    let innerArray= new Array(columnCount);
    for(let j=0;j<columnCount;j++){
      innerArray[j]=0;
    }
    array.push(innerArray);
  }
  return array;
}

// console.log('matrix obtained is', matrix);

for(let i=0;i<instructionSet.length;i++){
//   console.log('reading instruction '+ instructionSet.charAt(i));
  switch(instructionSet.charAt(i)){
    case 'N': moveNorth();
      break;
    case 'S': moveSouth();
      break;
    case 'E': moveEast();
      break;
    case 'W': moveWest();
      break;
  }
}

console.log('row '+(position.i+1));
console.log('column '+(position.j+1));
