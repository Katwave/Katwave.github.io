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
const desktopNavLinks = document.getElementsByClassName("desktopNavLinks");

buttonClose.addEventListener("click", () =>{

    mobileNavContainer.style="display:flex";
    buttonClose.style="display:none";
    button.style="display:flex";

    desktopNavLinks[0].style="display:none "
    desktopNavLinks[1].style="display:none "
    desktopNavLinks[2].style="display:none "
    desktopNavLinks[3].style="display:none "
    
});

button.addEventListener("click", () =>{

    mobileNavContainer.style="display:none";
    buttonClose.style="display:flex";
    button.style="display:none";

    buttonClose.style="@media screen and (max-width:685px){ display:none }";
    desktopNavLinks[0].style="@media screen and (max-width:685px){ display:inline-flex }"
    desktopNavLinks[1].style="@media screen and (max-width:685px){ display:inline-flex }"
    desktopNavLinks[2].style="@media screen and (max-width:685px){ display:inline-flex }"
    desktopNavLinks[3].style="@media screen and (max-width:685px){ display:inline-flex }"
});



//Changing the theme of the website

const themeChanger = document.getElementsByClassName("themeChanger");
const changeNavTheme = document.getElementsByClassName("navFullWidthContainer1")[0];
const container1ThemeChanged = document.getElementsByClassName("welcomeContainer")[0];
const changeLinksColor = document.getElementsByClassName("changeLinksColor");
const coursesMainContChangeTheme = document.getElementsByClassName("coursesMainCont")[0];
const formContainerChangeTheme = document.getElementsByClassName("formContainer")[0];
const nameChangeColor = document.getElementById("name");
const emailChangeColor = document.getElementById("email");
const messageChangeColor = document.getElementById("message");
const footerChangeColor = document.getElementsByClassName("footerInfoCont")[0];

const themeChangerWhite = document.getElementsByClassName("themeChangerWhite")[0];

themeChanger[0].addEventListener("click", () =>{

    changeNavTheme.style="background: rgb(0,15,24)";
    container1ThemeChanged.style="background: rgb(0,15,24)";
    document.body.style="background: rgb(0,15,24); color:#fff";
    coursesMainContChangeTheme.style="background: rgb(0,15,24)";
    formContainerChangeTheme.style="background: rgb(0,15,24); color:#fff";
    footerChangeColor.style="color:#fff"

    nameChangeColor.style="color:#fff";
    emailChangeColor.style="color:#fff";
    messageChangeColor.style="color:#fff";

    changeLinksColor[0].style="color:#fff";
    changeLinksColor[1].style="color:#fff";
    changeLinksColor[2].style="color:#fff";
    changeLinksColor[3].style="color:#fff";

    themeChangerWhite.style="display:inline; color:#fff";
    themeChanger[0].style="display:none";
});

themeChanger[1].addEventListener("click", () =>{

    changeNavTheme.style="background: rgb(0,15,24)";
    container1ThemeChanged.style="background: rgb(0,15,24)";
    document.body.style="background: rgb(0,15,24); color:#fff";
    coursesMainContChangeTheme.style="background: rgb(0,15,24)";
    formContainerChangeTheme.style="background: rgb(0,15,24); color:#fff";
    footerChangeColor.style="color:#fff"

    nameChangeColor.style="color:#fff";
    emailChangeColor.style="color:#fff";
    messageChangeColor.style="color:#fff";

    changeLinksColor[0].style="color:#fff";
    changeLinksColor[1].style="color:#fff";
    changeLinksColor[2].style="color:#fff";
    changeLinksColor[3].style="color:#fff";

    themeChangerWhite.style="display:inline; color:#fff";
    themeChanger[1].style="display:none";
});

themeChangerWhite.addEventListener("click", () =>{

    changeNavTheme.style="background: #fff";
    container1ThemeChanged.style="background: #fff";
    document.body.style="background: #fff; color:#000";
    coursesMainContChangeTheme.style="background: #fff";
    formContainerChangeTheme.style="background: #fff; color:#000";
    footerChangeColor.style="color:#000"

    nameChangeColor.style="color:#000";
    emailChangeColor.style="color:#000";
    messageChangeColor.style="color:#000";

    changeLinksColor[0].style="color:#000";
    changeLinksColor[1].style="color:#000";
    changeLinksColor[2].style="color:#000";
    changeLinksColor[3].style="color:#000";

    themeChangerWhite.style="display:none; color:#000";
    themeChanger[0].style="display:inline";
    themeChanger[1].style="display:inline";
});

