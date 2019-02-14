function number(){
num = prompt("enter a number");

if(num >=75 && num <= 100){
    alert("Excellent :A1")
}else if(num >= 65 && num <= 74 ){
    alert("Very Good: B2")
}else if(num >= 55 && num <= 64){
    alert("Credit: C4")
}else if(num >= 50 && num <=54){
    alert("Credit: C5")
}else if(num >=1 && num <= 49) {
    alert("Fail: F9");
} else{
  number();
}
}
number();

