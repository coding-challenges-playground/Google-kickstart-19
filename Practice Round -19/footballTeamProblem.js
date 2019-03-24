// Import stylesheets

var array=[1,2,3,4,5];
var data=new Array(3);
let r=data.length;
let tempArray=[];
  let len=r;
  let starterArray=getStartingFixers(array,r);
 
 for(let i=0;i<starterArray.length;i++){
   len--;
   let count=0;
   while(len!=0){
  for(let j=i+1;j<(array.length-len+1);j++){
    let arr=[];
    if(count==0){
    arr.push(starterArray[i]);
    arr.push(array[j]);
    tempArray.push(arr);
    }
    else{
      tempArray.forEach(arrayElement=>{
        arrayElement.push(array[j]);
      })
    }
  }
  len--;
 }
  console.log(tempArray);
 }


function getStartingFixers(array,r){
  let starterArray=[];
  for(let i=0;i<array.length-r+1;i++){
    starterArray.push(array[i]);
  }
  return starterArray;
}
