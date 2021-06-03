// start intro

let header = document.querySelector('.header')
let headerNav = document.querySelector('.header__nav')
let canvas = document.querySelector('canvas')

setTimeout(() => {
    header.style.opacity = '1' 
}, 2000);
setTimeout(() => {
    colorController.style.opacity = '1' 
}, 2000);
setTimeout(() => {
    headerNav.style.opacity = '1' 
}, 2000);
setTimeout(() => {
    canvas.style.display= 'none' 
}, 3000);

// end intro



let headerLogo = document.querySelector('.header__logo')

headerLogo.addEventListener('click', () => {
    location.reload()
})


let burgerMenu = document.querySelector('.burger__menu')
let menu = document.querySelector('.menu')
let navClose = document.querySelector('.nav__close')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.add('burgerActive')
    setTimeout(() => {
        menu.style.right = '0'
    }, 300);
})

navClose.addEventListener('click', () => {
    burgerMenu.classList.remove('burgerActive')
    menu.style.right = '-100%'
})



// color btn start

let colorController = document.querySelector('.color__controller')
let controllerColors = document.querySelector('.controller__colors')
let close = document.querySelector('.close')

colorController.addEventListener('click', () => {
    colorController.style.left = '-100%'
    controllerColors.style.left = '0%'
})

close.addEventListener('click', () => {
    colorController.style.left = '0%'
    controllerColors.style.left = '-100%'
})

// color btn end



// box  link  start

let boxLink = document.querySelectorAll('.box__link')

for (let i = 0; i < boxLink.length; i++) {
    boxLink[i].addEventListener('click', () => {
        for (let j = 0; j < boxLink.length; j++) {
            boxLink[j].classList.remove('link__active')
        }
        boxLink[i].classList.add('link__active')
    })

}


// box  link  end



// colors change start

let colors = document.querySelectorAll('.colors')
let reset = document.querySelector('.reset')
let headerPreTitle = document.querySelector('.headerPre__title span')
let buttons = document.querySelectorAll('.buttons button')
let contactLink = document.querySelectorAll('.contact__link')
let contactItem = document.querySelectorAll('.contact__list li')
// let linkActive  = document.querySelectorAll('.box__link')


colors.forEach(color => {
    color.addEventListener('click', () => {
        let change = color.getAttribute('data-color')
        headerPreTitle.style.color = `${change}`
        buttons.forEach(button => {
            button.style.background = `${change}`
        });
        contactItem.forEach(contactItems => {
            contactItems.style.background = `${change}`
        });
        contactLink.forEach(contactLinks => {
            contactLinks.style.color = `${change}`
        });
        // linkActive.forEach(linkActives => {
        //     let linkActivesAttr = linkActives.getAttribute('class')
        //     if (linkActivesAttr == 'box__link link__active') {
        //         linkActives.style.color = `${change}`                
        //     }
        // });
        
    })
});

reset.addEventListener('click', () => {
    location.reload()
})

// colors change end