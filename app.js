//object

let bio = {
    //key : //value
    name : "Kevin",
    age : 23,
    isHandsome : true,
    currentYear : 2022,
    
    //function in object(method)
    bornYear(){
        return 1999-this.currentYear;
    }
}

// console.log(bio);
// console.log(bio.name);
console.log(bio.bornYear());