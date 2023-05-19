// CIRCLES WITH MOUSE CURSOR LIKE SNAKE GAME :

const body = document.querySelector("body");

let move = function  (e){
    let circleDiv = document.createElement("div");
    circleDiv.classList.add("one");
    body.appendChild(circleDiv);
    circleDiv.style.transition= "all linear .5s"
    circleDiv.style.left=e.clientX+"px"
    circleDiv.style.top= e.clientY+"px"
    circleDiv.style.left= circleDiv.offsetLeft+"px"
    circleDiv.style.visibility= "hidden"
    // console.log(circleDiv);
    // console.log(e); important
}
document.addEventListener("mousemove",move);

// SINGLE CIRCLE WITH MOUSE CURSOR :

const parentTag= document.querySelector("body");
let mouseCircle = document.createElement("div");
    mouseCircle.classList.add("circleSize");
    parentTag.appendChild(mouseCircle);

    let innerCircle= document.createElement("div");
    innerCircle.classList.add("inner_circle");
    mouseCircle.appendChild(innerCircle);
    innerCircle.style.cssText= `
    top : 50%;
    left: 50%;
    transform :translate(-50%,-50%)
    `
document.addEventListener("mousemove",(m)=>{
    // mouseCircle.style.transition= "all linear .3s"
    mouseCircle.style.left=m.clientX+"px";
    mouseCircle.style.top= m.clientY+"px";
    mouseCircle.style.left= mouseCircle.offsetLeft+"px"
    mouseCircle.style.visibility='visible';
})
document.addEventListener("mouseout",()=>{
    mouseCircle.style.visibility='hidden';
})

