function check(){
    num = [];
    for(i=0; i < 10 ; i++){
        num.push(prompt("enter a number"));
    }
var biggest = num[0];

for(i= 1; i < 9; i++){
   if (biggest < num[i]){
       biggest = num[i]
   }
}
  console.log(biggest + " is the greatest number")  
}
check();

var arr= prompt("please enter a nu")
var  counts={};
for(var i=0; i<arr.length; i++){
    var num = arr[i];
    if( counts[num] == counts[num]){
        counts[num]++
    }else{
        counts[num] =1
    }
   
}