var name = "suryansh";
var character = "s"
var count = 0
for(let i = 0 ; i <= name.length ; i++ ){
    if(character == name[i]){

        count = count + 1 ;

    }
//console.log(count);
}
if(count >= 1 ){
    console.log("The Character " + character + " exists " + count + " times in the string " + name);
}
else{
    console.log("The Character " + character + " does not exists in the string " + name);
}