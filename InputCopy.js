function Copy(){
    const copier = document.getElementsByClassName("Copier");
    let message = copier[0].value;
    console.log(message);
    const copied = document.getElementsByClassName("Copied");
    copied[0].value = message;

}