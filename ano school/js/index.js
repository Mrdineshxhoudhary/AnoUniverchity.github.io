let btnclick = document.querySelector(".main-toog");
let listtoog = document.querySelector(".i-toog");
// const d = [document.querySelector(".i-toog")];

Array.from(document.getElementsByClassName('main-toog')).forEach((btnclick) => {
    btnclick.addEventListener("click", (e) => {
        console.log(e);
        listtoog.classList.toggle("list-toogl");
    });

});
