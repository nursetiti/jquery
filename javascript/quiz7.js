function prime(){
    var num = prompt("enter a number");
    if (num == 1)
    {
      console.log("not a prime")
    }else if(num == 2){
      console.log("prime")
    }else{
    
    for(i = 2;i<num;i++){
      if(num%i == 0){
        console.log("not a prime")
        break
      }
      if(num-1 == i)
      {
        console.log("prime")
      }
    }
  
    }
    }
  prime();