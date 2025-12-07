const registerView = document.createElement('div')
registerView.style.display = 'none'

const registerTittle = document.createElement('h1')
registerTittle.textContent = 'Mypet'
registerTittle.className = 'font-bold text-xl'
registerView.appendChild(registerTittle)

const registerSubtitle = document.createElement('h2')
registerSubtitle.textContent = 'Register'
registerSubtitle.className = 'font-bold'
registerView.appendChild(registerSubtitle)

// Registerform

const registerForm = document.createElement('form')
registerForm.className = 'flex flex-col'

const registerNameLabel = document.createElement('label')
registerNameLabel.textContent = 'Name'
registerNameLabel.htmlFor = 'name'
registerForm.appendChild(registerNameLabel)
const registerNameInput = document.createElement('input')
registerNameInput.id = 'name'
registerNameInput.type = 'text'
registerNameInput.className = 'border px-1'
registerForm.appendChild(registerNameInput)

const registerEmailLabel = document.createElement('label')
registerEmailLabel.textContent = 'Email'
registerEmailLabel.htmlFor = 'email'
registerForm.appendChild(registerEmailLabel)
const registerEmailInput = document.createElement('input')
registerEmailInput.id = 'email'
registerEmailInput.type = 'email'
registerEmailInput.className = 'border px-1'
registerForm.appendChild(registerEmailInput)

const registerUsernameLabel = document.createElement('label')
registerUsernameLabel.textContent = 'Username'
registerUsernameLabel.htmlFor = 'username'
registerForm.appendChild(registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
registerUsernameInput.type = 'text'
registerUsernameInput.id = 'username'
registerUsernameInput.className = 'border px-1'
registerForm.appendChild(registerUsernameInput)

const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.textContent = 'Password'
registerPasswordLabel.htmlFor = 'password'
registerForm.appendChild(registerPasswordLabel)
const registerPasswordInput = document.createElement('input')
registerPasswordInput.type = 'password'
registerPasswordInput.id = 'password'
registerPasswordInput.className = 'border px-1'
registerForm.appendChild(registerPasswordInput)
const registerShowPassButton = document.createElement('button')
registerShowPassButton.textContent = 'Show'
registerShowPassButton.type = 'button'
registerShowPassButton.className = 'self-end'
registerForm.appendChild(registerShowPassButton)

registerShowPassButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordInput.type === 'password') {
        registerShowPassButton.textContent = 'Hide'
        registerPasswordInput.type = 'text'
    } else {
        registerShowPassButton.textContent = 'Show'
        registerPasswordInput.type = 'password'
    }

})

const registerPassordRepeatLabel = document.createElement('label')
registerPassordRepeatLabel.textContent = 'Repeat assword'
registerPassordRepeatLabel.htmlFor = 'passwordRepeat'
registerForm.appendChild(registerPassordRepeatLabel)
const registerPasswordRepeatInput = document.createElement('input')
registerPasswordRepeatInput.type = 'password'
registerPasswordRepeatInput.id = 'passwordRepeat'
registerPasswordRepeatInput.className = 'border px-1'
registerForm.appendChild(registerPasswordRepeatInput)
const registerShowPassRepeatButton = document.createElement('button')
registerShowPassRepeatButton.textContent = 'Show'
registerShowPassRepeatButton.type = 'button'
registerShowPassRepeatButton.className = 'self-end'
registerForm.appendChild(registerShowPassRepeatButton)

registerShowPassRepeatButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordRepeatInput.type === 'password') {
        registerShowPassRepeatButton.textContent = 'Hide'
        registerPasswordRepeatInput.type = 'text'
    } else {
        registerShowPassRepeatButton.textContent = 'Show'
        registerPasswordRepeatInput.type = 'password'
    }

})


const registerSubmitButton = document.createElement('button')
registerSubmitButton.textContent = 'Register'
registerSubmitButton.type = 'submit'
registerSubmitButton.className = 'bg-black text-white self-center px-1'
registerForm.appendChild(registerSubmitButton)

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = registerNameInput.value
    const email = registerEmailInput.value
    const username = registerUsernameInput.value
    const password = registerPasswordRepeatInput.value
    const repeatPass = registerPasswordRepeatInput.value

    try {
        logic.registerUser(name, email, username, password, repeatPass)

        registerForm.reset()
        registerFeedback.textContent = ''

        registerView.style.display = 'none'
        loginView.style.display = ''
    } catch (error) {
        registerFeedback.textContent = error.message
    }
})

const registerLoginLink = document.createElement('a')
registerLoginLink.textContent = 'Login'
registerLoginLink.href = ''
registerLoginLink.className = 'underline font-bold'

registerForm.appendChild(registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = ''

})

const registerFeedback = document.createElement('p')
registerFeedback.className = 'text-red-900 font-bold'
registerForm.appendChild(registerFeedback)


registerView.appendChild(registerForm)
document.body.appendChild(registerView)