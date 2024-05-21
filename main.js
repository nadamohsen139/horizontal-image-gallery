let leftBtn = document.querySelector(".left-icon");
let rightBtn = document.querySelector(".right-icon");

leftBtn.addEventListener("click", scroll);
rightBtn.addEventListener("click", scrollR);

function scroll() {
    let left = document.querySelector(".scroll-img");
    left.scrollBy(-610,0);
}
function scrollR() {
    let right = document.querySelector(".scroll-img");
    right.scrollBy(610,0);
}