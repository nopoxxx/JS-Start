const linkText = document.querySelector('#linkText')

function changeText() {
    event.preventDefault()
    const userText = prompt('На какой текст изменить');
    linkText.textContent = userText
    linkText.removeEventListener('click', changeText)
}

linkText.addEventListener('click', changeText)