num=[];
counter=1

function check(){
    while(true){
        value = (prompt("enter a number"))
        if(isNaN(value)){
            continue;
        }else{
            value = parseInt(value)
        }
        num.push(value);
        a=prompt("Do you want to continue(y/n)")
        if(a=='n'){
            break;
        } else{
            counter++
        }
    }
    var biggest =  num[0];
    var sum = 0;
    var avg =  0.0;
    for(i=0; i<counter-1;i++){
        sum+= num[i];
        avg = sum/counter;
        if(biggest< num[i]){
            biggest = num[i]
        }
    }
    console.log(num)
    console.log("The sum is: " + sum + " and the average is " + avg);
    console.log(biggest+ "is the biggest number")
}

check();