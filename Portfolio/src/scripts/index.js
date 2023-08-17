// const navBar = document.querySelector(".nav");
// const navHeight = navBar.getBoundingClientRect().height;
// window.addEventListener("scroll", () => {
//     const scrollHeight = window.pageYOffset;
//     if (scrollHeight > navHeight) {
//         navBar.classList.add("fix-nav");
//     } else {
//         navBar.classList.remove("fix-nav");
//     }
// });
// import TypeIt from "typeit";

// new TypeIt("#type1", {
//     speed: 120,
//     loop: true,
//     waitUntilVisible: true,
// })
//     .type("Dev", { delay: 400 })
//     .pause(500)
//     .delete(9)
//     .go();

const navigate_btn = document.querySelector(".navigate");
const sideBar = document.querySelector(".on-mobile");
const list = document.querySelector(".list-appear");
let toggleButton = 0;
const handleClick = () => {
    if(toggleButton){
        sideBar.style = `display: none;`;
        // navigate_btn.style = `display: block`;
        navigate_btn.innerText = "Navigate"
        toggleButton = 0;
    }
    else{
        toggleButton = 1;
        sideBar.style = `
            display: block;
            position: relative;
        `;
        navigate_btn.innerText = "Close"
        list.style = `transition: margin-bottom 4s`
    }
};
const closeButton = () => {
    sideBar.style = `display: none;`;
        // navigate_btn.style = `display: block`;
        navigate_btn.innerText = "Navigate"
        toggleButton = 0;
}
navigate_btn.addEventListener('click', handleClick);
navigate_btn.addEventListener('keydown', closeButton);
