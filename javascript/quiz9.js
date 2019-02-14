number=[]
function enter(){
 var num = parseInt(prompt("enter a number"))
 numbers.push(num)
 var pin = prompt("Do you want to enter another number: y/n");
 if(pin == "n"){
   compare();
 }else{
   enter()
 }
}

function compare(){
 greatest = number[0]
 for (i=1;i<number.length;i++)
 {
   if (greatest < number[i])
   {
     greatest = number[i]
   }
 }
 console.log("The greastest is "+greatest)
}
enter();