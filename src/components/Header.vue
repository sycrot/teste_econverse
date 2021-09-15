<template>
    <div class="header">
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
                <i class="fa fa-chevron-left"></i>
                <i class="fa fa-chevron-right"></i>
                <ul class="act-navigation">
                    <li class="nvg-btn"></li>
                    <li class="nvg-btn nvg-btn-active"></li>
                    <li class="nvg-btn"></li>
                </ul>
            </div>
            <div class="slide-content">
                <img src="../assets/images/musical-background-2886886_1920.jpg" alt="" class="slide-image-bg">
            </div>
        </div>

        <div class="options-department">
            <div class="departments-container">
                <div class="department">
                    <img src="../assets/images/guitarra-opt.jpg" alt="Guitarra">
                    <p>Guitarras</p>
                </div>
                <div class="department">
                    <img src="../assets/images/microfone-opt.jpg" alt="Microfone">
                    <p>Microfones</p>
                </div>
                <div class="department">
                    <img src="../assets/images/mesadesom-opt.jpg" alt="Mesa de Som">
                    <p>Mesa de som</p>
                </div>
                <div class="department">
                    <img src="../assets/images/teclado-opt.jpg" alt="Teclado">
                    <p>Teclados</p>
                </div>
                <div class="department">
                    <img src="../assets/images/violao-opt.jpg" alt="Violao">
                    <p>Violão</p>
                </div>
                <div class="department">
                    <img src="../assets/images/bateria-opt.jpg" alt="Bateria">
                    <p>Baterias</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
    justify-content: center;
    width: 100%;
    height: 504px;
    box-sizing: border-box;
    overflow: hidden;
}
.slide-image-bg {
    width: 100%;
}
.slideshow-actions {
    width: 97%;
    height: 504px;
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
}
.slideshow-actions i {
    font-size: 50px;
    color: #fff;
    cursor: pointer;
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
.act-navigation .nvg-btn .nvg-btn-active {
    background: #fff;
}

.options-department {
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: center;
}
.departments-container {
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
}
.department {
    text-align: center;
}
.department p {
    text-transform: uppercase;
    color: #000;
    font-weight: bold;
    font-size: 14px;
    margin-top: 1vmax;
}
.options-department .department img {
    width: 106px;
    height: 106px;
    border-radius: 50%;
    filter: contrast(30%);
}
</style>