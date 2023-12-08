const button_big = document.querySelector('#button big')

button_big.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})