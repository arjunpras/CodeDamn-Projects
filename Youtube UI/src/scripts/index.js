const menuButton = document.getElementById('menu');
const sideBar = document.querySelector('.side-bar');
const sideBarNav = document.querySelector('.nav');
const sideBarATag = document.querySelectorAll(".nav-link");
const sideBarSpanTag = document.querySelectorAll(".nav-text");
let toggleMenu = 1;

const handleOnClick = () => {
    if (toggleMenu) {
        sideBar.classList = "side-bar-collapsed";
        sideBarATag.forEach(tag => {
            tag.classList = "nav-link-collapsed";
        });
        sideBarSpanTag.forEach(tag => {
            tag.classList = "nav-text-collapsed";
        });
        toggleMenu = 0;
    }
    else {
        sideBar.classList = "side-bar";
        sideBarATag.forEach(tag => {
            tag.classList = "nav-link"
        });
        sideBarSpanTag.forEach(tag => {
            tag.classList = "nav-text"
        });
        toggleMenu = 1;
    }
}

menuButton.addEventListener('click', handleOnClick);