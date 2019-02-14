function simpl()
   {
   var p;
   var r;
   var t;
   p=(prompt("Please Enter Principle Amount"));
   r=(prompt("Please Enter Rate Amount"));
   t=(prompt("Please Enter Time(year)"));
   var si=(p*r*t)/100;
   console.log("Simple Interest  is: "+si);
   }
   simpl();