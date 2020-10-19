var elements = window.prompt("Please Enter No of elements in array: ");

array = []
for(let i = 1 ; i<= elements ; i ++){
    var ele = window.prompt(`Please Enter element no ${i}`);
    array.push(ele);
}

reverse = []
for(let i = array.length - 1 ; i >= 0 ; i --){
        reverse.push(array[i]);
}
console.log("Array in Reverse is "  + "["+reverse+"]");