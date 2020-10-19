
function imagechanger(){
const photo = document.getElementsByClassName("Hello");
const txt = document.getElementsByTagName("h2");

    txt[0].innerText = "Tulip" ;
    let newimage = "https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    photo[0].src = newimage;




}

function Rechange(){
    const photo = document.getElementsByClassName("Hello");
    const txt = document.getElementsByTagName("h2");
    
    let newimage = "https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    photo[0].src = newimage;
    txt[0].innerText = "Sunflower";



}

function BackToMain(){
    const photo = document.getElementsByClassName("Hello");
    const txt = document.getElementsByTagName("h2");
    
    let newimage = "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    photo[0].src = newimage;
    txt[0].innerText = "Rose";
}