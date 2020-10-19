
var person = {
name : ["Suryansh","Unnati","Rohan","Shreya"],
age : [19,24,25,35],
country : ["India","India","United States","India"],
hobbies : ["Coder","Gamer","Football","Reader"],
Display : function() {
    for(let i = 0 ; i<this.age.length; i++){
    console.log(this.name[i]+" of "+this.age[i]+" of country "+this.country[i]+" has hobby "+this.hobbies[i]+".") ;
    }
},
India : function () {
    for(let i = 0 ; i < this.country.length ; i++ ){
        if(this.country[i] == "India"){
            console.log(this.name[i]+" has country India")
        }

    }
},
AgeLessThan30 : function () {
    for(let i = 0 ; i < this.country.length ; i++ ){
        if(this.age[i] < 30){
            console.log(this.name[i]+" has age less than 30 ")
        }

      


   
}
}
}
person.Display();
person.India();
person.AgeLessThan30();