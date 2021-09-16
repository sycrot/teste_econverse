const imagesPosts = document.querySelectorAll('.slide-post-content')
const slideContent = document.querySelector('.slide-content')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let current = 0

init()
function init() {
    var _show = slideContent.querySelectorAll('.show')

    Array.prototype.forEach.call(_show, sh => {
        sh.classList.remove('show')
    })
    imagesPosts[0].classList.add('show')
    btnPrev.classList.remove('btn-active')
    btnPrev.classList.remove('btn-active')

    if (imagesPosts[0]) {
        btnPrev.classList.add('btn-active')
    } else {
        btnPrev.classList.remove('btn-active')
    }
}

addListeners()

function addListeners() {
    btnNext.addEventListener('click', showNext)
    btnPrev.addEventListener('click', showPrev)
}

function showNext() {
    current++
    showSlide()
}

function showPrev() {
    current--
    showSlide()
}

function showSlide() {
    let qtd = imagesPosts.length
    let slide = current % qtd
    slide = Math.abs(slide)

    if (imagesPosts[slide] == imagesPosts[0]) {
        btnPrev.classList.add('btn-active')
    } else {
        btnPrev.classList.remove('btn-active')
    }
    if (imagesPosts[slide] == imagesPosts[qtd-=1]) {
        btnNext.classList.add('btn-active')
    }else {
        btnNext.classList.remove('btn-active')
    }
    imagesPosts[0].classList.remove('show')
    imagesPosts[slide].classList.add('show')
}