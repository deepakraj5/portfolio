
var nav = document.querySelector('nav')

window.addEventListener('scroll', function () {
    nav.classList.toggle('sticky', this.scrollY > 0)
})

function navToggle() {
    navLinks.classList.toggle('open')
    body.classList.toggle('click')
}

var hamburger = document.querySelector('.hamburger')
var navLinks = document.querySelector('.nav-links')
var body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    navToggle()
})

document.getElementById('home-menu').addEventListener('click', navToggle)

document.getElementById('profile-menu').addEventListener('click', navToggle)

document.getElementById('skills-menu').addEventListener('click', navToggle)

document.getElementById('contact-menu').addEventListener('click', navToggle)

var nameID = document.getElementById('name')

var name = 'eepakraj S'

let i = 0;

let nameIn = () => setInterval(() => {
    nameID.innerHTML += name.charAt(i)
    i ++;

    if(i > 12) {
        clearInterval(nameIn)  
    }
}, 500)

nameIn()

setInterval(() => {
    nameID.innerHTML = 'D'
    i = 0;
    nameIn()
}, 15000)

// var imageRotate = document.querySelector('.thinking-image img')

// setTimeout(() => {
//     imageRotate.classList.toggle('imagehandle')
// }, 4000)



