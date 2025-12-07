const homeView = document.createElement('div')
homeView.style.display = 'none'


const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeTitle.className = 'font-bold text-xl'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home !'
homeView.appendChild(homeSubtitle)

const addPetHomeBtn = document.createElement('button')
addPetHomeBtn.textContent = '+ Pet'
addPetHomeBtn.className = 'px-1 bg-black text-white'
homeView.appendChild(addPetHomeBtn)

addPetHomeBtn.addEventListener('click', function (event) {
    homeView.style.display = 'none'
    addPetView.style.display = ''
})


const homeLogOutBtn = document.createElement('button')
homeLogOutBtn.textContent = 'LogOut'
homeLogOutBtn.className = 'px-1 mx-2 bg-black text-white'

homeView.appendChild(homeLogOutBtn)

homeLogOutBtn.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()
    
    for (let i = homePetList.children.length - 1; i >= 0; i -- ) {
        const child = homePetList.children[i]

        child.remove()
    }

    homeView.style.display = 'none'
    landingView.style.display = ''
})


const homePetList = document.createElement('ul')
homeView.appendChild(homePetList)

document.body.appendChild(homeView)