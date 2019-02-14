
function check(){
    var a = prompt("enter a number");
    var b= prompt("enter a number");
   var c = prompt("enter a number");
  if(a > b && a > c){
      console.log(a + " is the greatest")
  } else if(b >  c){
    console.log(b + " is the greatest")
}else{
    console.log(c + " is the greatest")
}
}
check();