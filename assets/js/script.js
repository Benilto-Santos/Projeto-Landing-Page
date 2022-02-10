const btnOpenMenu = document.querySelector('.btnOpenMenu')
btnOpenMenu.addEventListener('click', () => {
    const menu = document.querySelector('.menu')
    menu.classList.add('active')
})

const btnCloseMenu = document.querySelector('.btnCloseMenu')
btnCloseMenu.addEventListener('click', () => {
    const menu = document.querySelector('.menu')
    menu.classList.remove('active')
})

const btnOpenNewletter = document.querySelectorAll('.menu a')
btnOpenNewletter[3].addEventListener('click', () => {
    const menu = document.querySelector('.menu')
    menu.classList.remove('active')

    const newLetter = document.querySelector('.newletter')
    newLetter.style.display = 'flex'
})

const btnCloseNewltter = document.querySelector('.btnCloseNewltter')
btnCloseNewltter.addEventListener('click', () => {
    const closeNewletter = document.querySelector('.newletter')
    closeNewletter.style.display = 'none'
})

