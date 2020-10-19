var elements = window.prompt("Please Enter No of elements in array: ");

array = []
for(let i = 1 ; i<= elements ; i ++){
    var ele = window.prompt(`Please Enter element no ${i}`);
    array.push(ele);
}

var value = window.prompt("Please Enter element to search: ");

count = 0;
exist = [];

for(let i = 0 ; i<= array.length ; i ++){
    if(value == array[i]){
        count = count + 1 ;
        exist.push(i);
    }    
}

if(count >= 1){
    console.log("The element " +value +" exists in the array " + "["+array+"]" +  " in the following index(s) :-");
    for(let i = 0 ; i <= exist.length - 1; i++){
        console.log("         " + exist[i]);
    }

}
else{

    console.log("The Element " + value +" does not exist in the array " + "["+array+"]");
}
