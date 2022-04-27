const firstPerson = {
    name: "Peter",
    sex: "male"
}

const secondPerson = {
    name: "Sarah",
    sex: "female"
}



function detectSex(cica){
    
    // console.log(person)
    
    if(cica.sex === "female"){
        return "This person is a female"
    }else if(cica.sex === "male") {
        return "This person is a male"
    }else{
        return "This person not male nor female"
    }
}

console.log(detectSex(firstPerson));
console.log(detectSex(secondPerson));

console.log(detectSex({
    name: "Penelope",
    sex: "female2"
}))

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallestNumber = args[0];
      
      for(i=0; i<args.length; i++) {
        if(i<smallestNumber){
          smallestNumber=args[i]
        }
      }
      return smallestNumber
    }
  }