<template>
    <div class="page">
        <div class="highlights-container">
            <div class="title-sb">
                <h1 class="hg-title">Instrumentos <strong>Destaque</strong></h1>
                <p class="hg-t-description">it is a long established fact that a reader will be destracted by the readable</p>
            </div>
            <div class="hgs-content">
                <div class="hgs-post">
                    <img src="../assets/images/bateria-el-post.jpg" alt="">
                    <p class="hgs-post-title">Bateria eletrônica</p>
                    <p class="hgs-post-description">Many desktop publishing packages and web page editors now</p>
                    <p class="hgs-post-price">R$ 1499,90</p>
                </div>
                <div class="hgs-post">
                    <img src="../assets/images/bateria-el-post.jpg" alt="">
                    <p class="hgs-post-title">Bateria eletrônica</p>
                    <p class="hgs-post-description">Many desktop publishing packages and web page editors now</p>
                    <p class="hgs-post-price">R$ 1499,90</p>
                </div>
                <div class="hgs-post">
                    <img src="../assets/images/bateria-el-post.jpg" alt="">
                    <p class="hgs-post-title">Bateria eletrônica</p>
                    <p class="hgs-post-description">Many desktop publishing packages and web page editors now</p>
                    <p class="hgs-post-price">R$ 1499,90</p>
                </div>
                <div class="hgs-post">
                    <img src="../assets/images/bateria-el-post.jpg" alt="">
                    <p class="hgs-post-title">Bateria eletrônica</p>
                    <p class="hgs-post-description">Many desktop publishing packages and web page editors now</p>
                    <p class="hgs-post-price">R$ 1499,90</p>
                </div>
                <div class="hgs-post">
                    <img src="../assets/images/bateria-el-post.jpg" alt="">
                    <p class="hgs-post-title">Bateria eletrônica</p>
                    <p class="hgs-post-description">Many desktop publishing packages and web page editors now</p>
                    <p class="hgs-post-price">R$ 1499,90</p>
                </div>
                <div class="hgs-post">
                    <img src="../assets/images/bateria-el-post.jpg" alt="">
                    <p class="hgs-post-title">Bateria eletrônica</p>
                    <p class="hgs-post-description">Many desktop publishing packages and web page editors now</p>
                    <p class="hgs-post-price">R$ 1499,90</p>
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
export default {

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
    height: 348px;
    box-sizing: border-box;
    margin: 3vmax;
}
.hgs-post img {
    width: 100%;
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
</style>