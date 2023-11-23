const userText = document.querySelector('#input')
const button = document.querySelector('#button')
const text = document.querySelector('#duplicateField')

function clearText() {
    console.log(userText.value)
    userText.value = ""
    text.textContent = ""
}

function changeText() {
    text.textContent = userText.value
}

userText.addEventListener('change', changeText)

  
button.addEventListener('click', clearText)