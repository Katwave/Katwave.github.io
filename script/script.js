// Create an animation intro

const introContainer = document.getElementsByClassName("introContainer")[0],
    container1 = document.getElementsByClassName("container1")[0];

function introAnimation() {

    introContainer.style="display: flex";
    container1.style="display: none";
};

function removeAnimation() {

    introContainer.style="display: none";
    container1.style="display: flex";
};

setTimeout(introAnimation, 0);
setTimeout(removeAnimation, 5000);



//Mobile nav interactive

const mobileNavContainer = document.getElementsByClassName("mobileNavContainer")[0];
const buttonClose = document.getElementById("buttonClose");
const button = document.getElementById("button");

buttonClose.addEventListener("click", () =>{

    mobileNavContainer.style="display:flex";
    buttonClose.style="display:none";
    button.style="display:flex";
});

button.addEventListener("click", () =>{

    mobileNavContainer.style="display:none";
    buttonClose.style="display:flex";
    button.style="display:none";
});