var name
var maths
var eng
var science
var econs
var counter = 1;
store=[]
function data(){
     name= prompt("What is your name")
     maths = parseInt(prompt("Please enter you maths score"))   
     eng = parseInt(prompt("Please enter you eng score"))
     science = parseInt(prompt("Please enter you science score"))
     econs = parseInt(prompt("Please enter you econs score"))

     dataset={
         name:name,
         maths:maths,
         eng:eng,
         science:science,
         econs:econs
     }
     store.push(dataset)
check = prompt("Do you want to continue(y/n)")
if (check != "n"){
    counter++
    data();
}else{
 output();
}
}
function grade(score){
    if(score >=75 && score <= 100){
       return "Excellent :A1"
    }else if(score >= 65 && score <= 74 ){
        return "Very Good: B2"
    }else if(score >= 55 && score <= 64){
        return "Credit: C4"
    }else if(score >= 50 && score <=54){
        return "Credit: C5"
    }else if(score >=1 && score <= 49) {
        return "Fail: F9"
    } else{
      return "grade is invalid"
    }
    }
function output(){
    for (i=0;i <= counter -1;i++){
       console.log("Your name is " + store[i]["name"])   
       console.log("Your grade in maths is "  + grade (store[i]["maths"]))
       console.log("Your grade in eng is " + grade(store[i]["eng"]))
       console.log("Your grade in science is " + grade(store[i]["science"]))
       console.log("Your grade in econs is " + grade(store[i]["econs"]))
       avg = (store[i]["maths"] + store[i]["eng"] + store[i]["science"]+ store[i]["econs"])/4 ;
       console.log("Your total average is " + avg)   
       console.log("=============================================")

    }
}


data()