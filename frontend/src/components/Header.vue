<template>
    <div id="header">
        <div class="nav-info">
            <ul class="nav-info-ul">
                <li>Compra 100%</li>
                <li class="dividing-line-"></li>
                <li>1 troca grátis</li>
                <li class="dividing-line-"></li>
                <li><i>%</i> 5x sem juros</li>
                <li class="dividing-line-"></li>
                <li><i class="fa fa-truck"></i> Entrega para todo o Brasil</li>
            </ul>
        </div>

        <div class="header-nav">
            <img src="../assets/images/logo.png" alt="Logo">
            <input type="text" placeholder="BUSQUE AQUI..." class="search-bar">
            <p class="contact-wpp"><i class="fa fa-whatsapp"></i>(11) 99999-9999</p>
            <div class="info-account">
                <i class="fa fa-user"></i>
                <p>Olá, visitante<small><a href="#">Minha conta</a></small></p>
            </div>
            <div class="header-cart">
                <i class="fa fa-shopping-bag"></i>
                <small>Seu Carrinho</small>
                <p>0 item (s)</p>
            </div>
        </div>

        <div class="header-menu">
            <ul class="list-menu">
                <li><a href="#">Todas as categorias</a></li>
                <li><a href="#">Som Profissional</a></li>
                <li><a href="#">Instrumentos musicais</a></li>
                <li><a href="#">Promoções</a></li>
                <li><a href="#">Contato</a></li>

            </ul>
        </div>

        <div class="slideshow-container">
            <div class="slideshow-actions">
                <i class="btn-prev fa fa-chevron-left"></i>
                <i class="btn-next fa fa-chevron-right"></i>
                <ul class="act-navigation">
                </ul>
            </div>
            <div class="slide-content">
                <div class="slide-post-content">
                    <div class="slide-post-content-information">
                        <div class="texts-slide-i">
                            <p>Novos produtos</p>
                            <h1><strong>Instrumentos</strong><br>Profisionais</h1>
                            <a href="#">Confira</a>
                        </div>
                    </div>
                    <img src="../assets/images/musical-background-2886886_1920.jpg" alt="" class="slide-image-bg">
                </div>
                <div class="slide-post-content">
                    <div class="slide-right slide-post-content-information">
                        <div class="texts-slide-i">
                            <p>Novos produtos</p>
                            <h1><strong>Instrumentos</strong><br>Profisionais</h1>
                            <a href="#">Confira</a>
                        </div>
                    </div>
                    <img src="../assets/images/musician-349790_1920.jpg" alt="" class="slide-image-bg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const imagesPosts = document.querySelectorAll('.slide-post-content')
        const slideContent = document.querySelector('.slide-content')
        const btnPrev = document.querySelector('.btn-prev')
        const btnNext = document.querySelector('.btn-next')
        const actNavigation = document.querySelector('.act-navigation')
        
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

            nvgBtnInit()

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
            const nvgBtn = document.querySelectorAll('.nvg-btn')
            actNavigation.querySelector('.nvg-btn-active').classList.remove('nvg-btn-active')
            nvgBtn[slide].classList.add('nvg-btn-active')
            imagesPosts[slide].classList.add('show')
        }
    }
}
</script>

<style>
.nav-info {
    width: 100%;
    height: 38px;
    background: #041E50;
}

.nav-info-ul {
    display: flex;
    height: 38px;
    justify-content: center;
    align-items: center;
}
.nav-info-ul li {
    display: flex;
    align-items: center;
    color: #fff;
    margin: 0 3vmax;
    list-style: none;
    text-transform: uppercase;
    font-size: 10px;
}
.nav-info-ul li i {
    font-size: 16.8px;
    margin-right: 8px;
}

.dividing-line- {
    height: 18px;
    width: 1px;
    background-color: #fff;
}

.header-nav {
    height: 80px;
    display: flex;
    padding: 0 8vmax;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #78757570;
}

.header-nav img {
    width: 180px;
}
.search-bar {
    width: 339px;
    height: 41px;
    margin: 0 40px;
    text-align: left;
    align-self: center;
    padding-left: 10px;
    border: 1px solid #707070;
    box-sizing: border-box;
    border-radius: 4px;
}
.contact-wpp {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #041E50;
    font-weight: bold;
    font-style: normal;
}
.contact-wpp i {
    font-size: 21.75px;
    margin-right: 8px;
}

.info-account {
    display: flex;
    align-items: center;
}

.info-account p {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #041E50;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
}
.info-account p small a{
    font-size: 10px;
    text-decoration: none;
    color: #041E50;
}
.info-account i {
    color: #041E50;
    margin-right: 8px;
    font-size: 21.75px;
}

.header-cart {
    width: 77px;
    height: 145px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 1vmax;

    background-color: #041E50;
    color: #fff;
}
.header-cart i {
    font-size: 22px;
    margin-top: 55px;
}
.header-cart small {
    font-size: 10px;
    margin: 0.8vmax 0;
    text-transform: uppercase;
}
.header-cart p {
    font-size: 13px;
    text-transform: uppercase;
}

.header-menu {
    width: 100%;
    height: 50px;
    display: flex;
}

.header-menu .list-menu {
    width: 70%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8vmax;
    list-style: none;
}
.header-menu .list-menu li a{
    font-size: 12px;
    color: #041E50;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
}

.slideshow-container {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: 504px;
    overflow: hidden;
}
.slide-post-content .slide-post-content-information {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 504px;
    padding: 8vmax 0 0 7vmax;
    color: #fff;
    text-transform: uppercase;
    background: linear-gradient(to right, rgb(14, 65, 88), transparent);
}
.slide-post-content .slide-right {
    align-items: flex-end;
    padding: 8vmax 0 0 0;
    background: linear-gradient(to left, rgb(72, 88, 14), transparent);
}
.slide-post-content .slide-right .texts-slide-i {
    margin-right: 7vmax;
}
.slide-post-content .slide-post-content-information .texts-slide-i {
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
}
.slideshow-container .show .slide-post-content-information .texts-slide-i {
    opacity: 1;
}
.slide-post-content .slide-post-content-information .texts-slide-i p{
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.4em;
}
.slide-post-content .slide-post-content-information .texts-slide-i h1{
    font-size: 41px;
    font-weight: 300;
    letter-spacing: 0.09em;
    margin: 2vmax 0;
}
.slide-post-content .slide-post-content-information .texts-slide-i strong{
    font-size: 41px;
    font-weight: bold;
    letter-spacing: 0.12em;
}
.slide-post-content .slide-post-content-information .texts-slide-i a{
    height: 31px;
    color: #fff;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0.1em;
    text-decoration: none;
    padding-bottom: 12px;
    border-bottom: 1px solid #fff;
    cursor: pointer;
}
.slideshow-container .slide-post-content {
    transition: opacity 400ms ease-in-out;
    position: absolute;
    opacity: 0;
}
.slideshow-container .show {
    position: static;
    opacity: 1;
}
.slide-image-bg {
    width: 100%;
}
.slideshow-actions {
    height: 504px;
    display: flex;
    position: static;
    align-items: center;
    z-index: 3;
}
.slideshow-actions i {
    font-size: 50px;
    color: #fff;
    cursor: pointer;
}
.btn-prev {
    position: absolute;
    left: 2vmax;
}
.btn-next {
    position: absolute;
    right: 2vmax;
}
.btn-active {
    display: none;
}

.act-navigation {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 2vmax;
}
.act-navigation .nvg-btn{
    width: 12px;
    height: 12px;
    border: 1px solid #fff;
    border-radius: 50%;
    list-style: none;
    margin: 0 0.5vmax;
    cursor: pointer;
}
.act-navigation .nvg-btn-active {
    background-color: #fff;
}
</style>