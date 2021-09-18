module.exports = (imagesPosts, slideContent, btnPrev, btnNext, option, actNavigation = null) => {
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

        if (option == 'header') {
            nvgBtnInit()
        }

        if (imagesPosts[0]) {
            btnPrev.classList.add('btn-active')
        } else {
            btnPrev.classList.remove('btn-active')
        }
    }

    addListeners()

    function nvgBtnInit() {
        for (var i = 0; i < imagesPosts.length; i++) {
            let nvgBtn = document.createElement('li')
            nvgBtn.classList.add('nvg-btn')
            actNavigation.appendChild(nvgBtn)
        }
        const nvgBtnIdent = document.querySelectorAll('.nvg-btn')
        nvgBtnIdent[0].classList.add('nvg-btn-active')
    }

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
        slideContent.querySelector('.show').classList.remove('show')
        if (option == 'header') {
            const nvgBtn = document.querySelectorAll('.nvg-btn')
            actNavigation.querySelector('.nvg-btn-active').classList.remove('nvg-btn-active')
            nvgBtn[slide].classList.add('nvg-btn-active')
        }
        imagesPosts[slide].classList.add('show')
    }
}