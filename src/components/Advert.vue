<template>
<div class="advert">
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
    <div class="ad-content">
        <div class="ad-container">
            <div class="ad-container-info">
                <small>Novidades</small>
                <p class="i-line-w"></p>
                <h1>Áudio</h1>
                <h1 style="font-weight: 300;">Profissional</h1>
                <button class="btn-check">Confira</button>
            </div>
            <img src="../assets/images/bateria-opt.jpg" alt="Bateria">
        </div>
        <div class="ad-container">
            <div class="ad-container-info">
                <small>Novidades</small>
                <p class="i-line-w"></p>
                <h1>Instrumentos</h1>
                <h1 style="font-weight: 300;">Musicais</h1>
                <button class="btn-check">Confira</button>
            </div>
            <img src="../assets/images/guitarra-opt.jpg" alt="Guitarra">
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.ad-content {
    width: 100%;
    height: 386px;
    display: flex;
}
.ad-content .ad-container {
    width: 50%;
    height: 386px;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ad-container .ad-container-info {
    position: absolute;
    text-align: center;
    z-index: 10;
}
.ad-container-info small {
    font-size: 13px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.4em;
}
.ad-container-info .i-line-w {
    width: 18px;
    height: 1px;
    background-color: #fff;
    margin: 2vmax 0;
}
.ad-container-info h1 {
    color: #fff;
    font-size: 41px;
    letter-spacing: 0.1em;
    font-weight: bold;
    text-transform: uppercase;
}
.ad-container-info .btn-check {
    width: 154px;
    height: 52px;
    border: 1px solid #fff;
    color: #fff;
    background: none;
    border-radius: 10px;
    text-transform: uppercase;
    margin-top: 2vmax;
    cursor: pointer;
}
.ad-container img {
    width: 100vw;
    height: 100vh;
    filter: contrast(70%);
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