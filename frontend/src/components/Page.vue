<template>
    <div id="page">
        <div class="product-container-page" style="top: 0; position: fixed; z-index: 11; height: 100vh;">
            <div class="pcg-content">
                <div class="btn-close-content">
                    <i class="pcg-btn-close fa fa-times" v-on:click="closeProductContainerPage()"></i>
                </div>
                <div class="pcg-info-content">
                    <div class="pcg-image-product">
                        <img :src="this.imageProduct" alt="Image Product">
                    </div>
                    <div class="pcg-product-information">
                        <h1 class="pcg-title-product">{{this.titleProduct}}</h1>
                        <h1 class="pcg-price-product"><strong>R$ {{parseFloat(this.priceProduct).toFixed(2).replace('.',',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}}</strong></h1>
                        <p class="pcg-description-product">
                            {{this.descriptionProduct}}
                        </p>
                        <a href="#">Veja mais detalhes do produto ></a>
                        <button class="pcg-add-to-cart">Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="highlights-container">
            <div class="title-sb">
                <h1 class="hg-title">Instrumentos <strong>Destaque</strong></h1>
                <p class="hg-t-description">it is a long established fact that a reader will be destracted by the readable</p>
            </div>
            <div class="hgs-content">
                <div class="hgs-post" v-for="(item, key) in products" :key="key" v-on:click="postClick(item)">
                    <div class="hgs-image-animate">
                        <img :src="item.photo" alt="">
                        <div class="hgs-img-quickview">
                            <i class="fa fa-search"></i>
                            <p>Quick view</p>
                        </div>
                    </div>
                    <p class="hgs-post-title">{{item.productName}}</p>
                    <p class="hgs-post-description">{{item.descriptionShort}}</p>
                    <p class="hgs-post-price">R$ {{parseFloat(item.price).toFixed(2).replace('.',',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}}</p>
                </div>
            </div>
            <button class="btn-view-more">Ver mais</button>
        </div>

        <div class="best-brands-container">
            <div class="bbc-title">
                <h1 class="hg-title">As <strong>Melhores</strong> Marcas</h1>
                <p class="hg-t-description">it is a long established fact that a reader will be destracted by the readable</p>
            </div>
            <div class="bbc-brands-logos">
                <img src="../assets/images/AKG_logo.svg" alt="Logo AKG" class="bbc-logo" style="width: 133px;">
                <img src="../assets/images/roland-logo.svg" alt="Logo AKG" class="bbc-logo" style="width: 211px;">
                <img src="../assets/images/BOSS_logo.svg.svg" alt="Logo AKG" class="bbc-logo" style="width: 202px;">
                <img src="../assets/images/Shure_Logo.svg.svg" alt="Logo AKG" class="bbc-logo" style="width: 223px;">
            </div>
        </div>

        <div class="about-us-container">
            <div class="au-content">
                <h1 class="hg-title"><strong>Sobre nós</strong></h1>
                <p class="au-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat velit eum, labore officiis adipisci tenetur quisquam nam exercitationem commodi, reiciendis, ipsam rerum. Sed quos adipisci praesentium ab dolorem reprehenderit fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fugiat esse quos mollitia quas est iusto dolorum nesciunt magnam similique repellendus voluptas voluptatibus iste et, quis eum soluta maiores voluptatem!</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            products: [],
            titleProduct: '',
            imageProduct: '',
            descriptionProduct: '',
            priceProduct: '',
        }
    },
    created: function() {
        axios.get('http://localhost:3001/products')
            .then(res => {
                this.products = res.data
            })
    },
    methods: {
        postClick(item) {
            this.titleProduct = item.productName
            this.imageProduct = item.photo
            this.descriptionProduct = item.descriptionShort
            this.priceProduct = item.price
            const productContainerPage = document.querySelector('.product-container-page')
            productContainerPage.classList.add('product-container-page-open')
        },
        closeProductContainerPage() {
            const productContainerPage = document.querySelector('.product-container-page')
            productContainerPage.classList.remove('product-container-page-open')
        }
    }
}
</script>

<style>
.highlights-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vmax;
    text-align: center;
}
.hg-title {
    font-size: 23px;
    color: #041E50;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.hg-title strong {
    font-size: 23px;
    color: #041E50;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}
.hg-t-description {
    color: #222222;
    font-size: 15px;
    letter-spacing: 0.1em;
    margin-top: 0.5vmax;
}
.hgs-content {
    width: 80%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3vmax;
}
.hgs-post {
    width: 218px;
    height: 400px;
    padding: 2vmax 0.5vmax;
    box-sizing: border-box;
    margin: 3vmax;
    cursor: pointer;
    border-radius: 8px;
    transition: box-shadow 200ms ease-in;

}
.hgs-image-animate {
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.hgs-image-animate img {
    width: 100%;
    transition: margin-top 200ms ease-in;
}
.hgs-post:hover {
    box-shadow: 5px 5px 11px rgba(0, 0, 0,0.2);
}
.hgs-post:hover .hgs-image-animate img {
    margin-top: -10px;
}   
.hgs-post:hover .hgs-img-quickview {
    display: flex;
    opacity: 1;
}
.hgs-post .hgs-img-quickview {
    width: 217px;
    display: none;
    opacity: 0;
    align-items: center;
    flex-direction: column;
    position: absolute;
    box-shadow: 0 -30px 15px #ffffff94;
    margin-top: 165px;
    background-color: #ffffff94;
    transition: opacity 200ms ease-in;
}
.hgs-post .hgs-img-quickview p{
    font-weight: bold;
    font-size: 13px;
    color: #041E50;
    margin-top: 5px;
}
.hgs-image-animate i{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #041E50;
}
.show-post-container {
    display: block;
}
.hgs-post .hgs-post-title {
    font-size: 15px;
    color: #041E50;
    font-weight: bold;
    letter-spacing: 0.05em;
}
.hgs-post .hgs-post-description {
    font-size: 13px;
    color: #041E50;
    font-weight: 300;
    letter-spacing: 0.05em;
    margin: 0.8vmax 0;
}
.hgs-post .hgs-post-price {
    font-size: 18px;
    color: #041E50;
    font-weight: bold;
    letter-spacing: 0.05em;
}

.highlights-container .btn-view-more {
    width: 154px;
    height: 52px;
    box-sizing: border-box;
    border-radius: 5px;
    background: none;
    text-transform: uppercase;
    color: #041E50;
    cursor: pointer;
    border: 1px solid #041E50;
}

.best-brands-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 8vmax;
}
.bbc-brands-logos {
    display: flex;
    align-items: center;
    margin-top: 5vmax;
}
.bbc-brands-logos .bbc-logo{
    filter: contrast(20%);
    margin: 0 3vmax;
}

.about-us-container {
    display: flex;
    justify-content: center;
    margin-top: 8vmax;
}
.au-content {
    width: 70%;
    height: 140px;
    text-align: center;
}
.au-content .hg-title {
    margin-bottom: 2vmax;
}
.au-content .au-text {
    color: #222222;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    line-height: 19px;
}

.product-container-page {
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background: rgba(34, 34, 34, 0.795);
}
.product-container-page-open {
    display: flex;
}
.pcg-info-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
.pcg-content {
    width: 769px;
    height: 355px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 15px;
}
.pcg-image-product img{
    width: 329px;
}
.pcg-product-information {
    text-align: left;
    display: flex;
    flex-direction: column;
}
.pcg-title-product {
    font-size: 20px;
    color: #041E50;
    font-weight: normal;
    letter-spacing: 0.05em;
    margin-bottom: 25px;
}
.pcg-price-product {
    font-size: 20px;
    font-weight: 900;
    color: #041E50;
    letter-spacing: 0.05em;
    margin-bottom: 25px;
}
.pcg-description-product {
    width: 290px;
    font-size: 10px;
    line-height: 150.5%;
    font-weight: normal;
    letter-spacing: 0.05em;
    color: #222222;
    margin-bottom: 25px;
}
.pcg-product-information a {
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.05em;
    color: #041E50;
    text-decoration-line: line;
    margin-bottom: 25px;
}
.pcg-add-to-cart {
    width: 164px;
    height: 40px;
    background: #041E50;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
}

.btn-close-content {
    width: 90%;
    margin-top: -25px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
}
.btn-close-content i {
    font-size: 22px;
    cursor: pointer;
}
</style>