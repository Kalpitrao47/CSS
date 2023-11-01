function personOne(personTwo){
    console.log("I am person One")
    personTwo();
}

function personTwo(){
    console.log("I am person Two")
}


personOne(personTwo);
