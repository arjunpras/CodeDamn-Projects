const menuButton = document.getElementById('menu');
const sideBar = document.querySelector('.side-bar');
const sideBarATag = document.querySelectorAll(".nav-link");
let toggleMenu = 1;

const handleOnClick = () => {
    if (toggleMenu) {
        sideBar.classList = "side-bar-collapsed";
        sideBarATag.forEach(tag => {
            tag.style = `
                flex-direction: column;
                justify-content: center;
                align-item: center;
            `;
        });
        toggleMenu = 0;
    }
    else {
        sideBar.classList = "side-bar";
        sideBarATag.forEach(tag => {
            tag.style = `
                flex-direction: row;
                justify-content: flex-start;
                align-item: center
            `;
        });
        toggleMenu = 1;
    }
}

menuButton.addEventListener('click', handleOnClick);