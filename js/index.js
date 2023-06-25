const header=document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});
// nav bar close and open icon
const menu=document.querySelector(".menu-icon");
const navlist=document.querySelector(".navlist");
const one=document.querySelector(".bar-one");
const two=document.querySelector(".bar-two")
const three=document.querySelector(".bar-three");

menu.onclick = () =>{
    navlist.classList.toggle("open");
    one.classList.toggle("first");
    two.classList.toggle("secon");
    three.classList.toggle("last");
}

// show more about me
const show=document.querySelector(".finish");
const hidden=document.querySelector(".free");
// const after=document.querySelector(".about-text");
show.onclick = () =>{
    
    hidden.classList.toggle("banded");

    /*after.addEventListener("click", function(){
        
        let bot=document.createElement("button");
        bot.setAttribute("id", "change"); 
        bot.innerText="close";
        document.body.appendChild(bot);
        bot.style=("background-color:#624adb; padding:12px; color:#fff; width:20px");
          
    })*/
}