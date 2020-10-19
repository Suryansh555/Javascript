var elements = window.prompt("Please Enter No of elements in array: ");

array = []
for(let i = 1 ; i<= elements ; i ++){
    var ele = window.prompt(`Please Enter element no ${i}`);
    array.push(ele);
}

contain = [];

for(let i = 0 ; i<= array.length - 1 ; i ++){
   
    var name = array[i];
    
    for(let j = 0 ; j <= name.length - 1 ; j++){
        
       
       if(name[j] == "a"){
        contain.push(name);
           break;
       }
    }
    
    }
    if(contain.length >= 1){
        console.log("Element(s) that contain a is/are "+contain);      
    }  
else{
    console.log("there are no elements in the array that contains a")
}    

