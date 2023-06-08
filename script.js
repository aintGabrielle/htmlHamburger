const menu = document.getElementById('menu1')
const menuTwo = document.getElementById('menu2')
const nav = document.getElementById('nav')

menuTwo.addEventListener('click', e => {
    nav.style.top="5em"
    nav.style.animationDuration = 300
    nav.style.transitionDelay = "ease-in"
    menuTwo.style.display = "none"
    menu.addEventListener('click', () => {
        nav.style.top="-20em"
        nav.style.animationDuration = '300ms'
        nav.style.transitionDelay = 300
        menuTwo.style.display = "block"
    })
})