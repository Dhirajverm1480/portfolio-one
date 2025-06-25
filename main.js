let menuImg = document.getElementById('menu-img')
let menuBar = document.querySelector('.menu-bar');
let menuBox = document.querySelector('.menu-box')
let Close = document.getElementById("close")

menuBar.addEventListener('click', () => {
menuBox.style.height = "100%";
})

Close.addEventListener('click', () => {
    menuBox.style.height = "0%"
})