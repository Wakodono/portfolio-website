const modeToggle = document.querySelector('#mode-toggle')

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})