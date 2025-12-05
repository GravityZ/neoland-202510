//landing

const landingView = document.createElement('div')

const landingTittle = document.createElement('h1')
landingTittle.textContent = 'Mypet'
landingTittle.className = 'font-bold text-xl'
landingView.appendChild(landingTittle)

const landingWelcome = document.createElement('p')
landingWelcome.textContent = 'welcome !'
landingView.appendChild(landingWelcome)

const landingContainer = document.createElement('nav')
const landingLoginLink = document.createElement('a')
landingLoginLink.textContent = 'Login'
landingLoginLink.href = ''
landingLoginLink.className = 'font-bold border-2 px-1 rounded-sm'
landingContainer.appendChild(landingLoginLink)
const LandingOrText = document.createTextNode(' or ')
landingContainer.appendChild(LandingOrText)
const landingRegisterlink = document.createElement('a')
landingRegisterlink.textContent = 'Register'
landingRegisterlink.href = ''
landingRegisterlink.className = 'font-bold border-2 px-1 rounded-sm'
landingContainer.appendChild(landingRegisterlink)
landingView.appendChild(landingContainer)


landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    landingView.style.display = 'none'
    loginView.style.display = ''


})

landingRegisterlink.addEventListener('click', function (event) {
    event.preventDefault()

    landingView.style.display = 'none'
    registerView.style.display = ''
})


document.body.appendChild(landingView)