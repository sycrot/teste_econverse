<template>
    <div class="footer">
        <footer class="footer-container">
        <div class="comments-container">
            <div class="cc-actions">
                <i class="btn-prev fa fa-chevron-left"></i>
                <i class="btn-next fa fa-chevron-right"></i>
            </div>
            <div class="cc-posts">
                <div class="cc-post-content">
                    <div class="cc-user">
                        <img src="../assets/images/perfil-img.jpg" alt="User">
                        <p class="user-name">Felipe Salmim<small>Designer</small></p>
                    </div>
                    <div class="cc-comment-content">
                        <p class="comment-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae doloremque dolorem distinctio suscipit, adipisci quisquam laudantium repellat veniam natus, inventore iste saepe quod molestias! Aliquid architecto natus in vitae dolorem.</p>
                    </div>
                </div>
                <div class="cc-post-content">
                    <div class="cc-user">
                        <img src="../assets/images/bateria-opt.jpg" alt="User">
                        <p class="user-name">Felipe Salmim<small>Designer</small></p>
                    </div>
                    <div class="cc-comment-content">
                        <p class="comment-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae doloremque dolorem distinctio suscipit, adipisci quisquam laudantium repellat veniam natus, inventore iste saepe quod molestias! Aliquid architecto natus in vitae dolorem.</p>
                    </div>
                </div>  
            </div>
        </div>
        <div class="footer-content">
            <ul class="lists-footer">
                <li>
                    <p class="li-title">Institucional</p>
                    <a href="#" class="li-link">Quem somos</a>
                    <a href="#" class="li-link">Nossas lojas</a>
                </li>
                <li>
                    <p class="li-title">Institucional</p>
                    <a href="#" class="li-link">Fale conosco</a>
                    <a href="#" class="li-link">vendas@ninjasom.com.br</a>
                </li>
            </ul>

            <ul class="lists-footer">
                <li>
                    <p class="li-title">Ajuda e Suporte</p>
                    <a href="#" class="li-link">Política de privacidade</a>
                    <a href="#" class="li-link">Política de trocas</a>
                    <a href="#" class="li-link">Prazos de entrega</a>
                    <a href="#" class="li-link">Termos de uso</a>
                </li>
            </ul>

            <ul class="lists-footer">
                <li class="payment-forms-li">
                    <p class="li-title">Formas de pagamento</p>
                    <div class="payment-forms-icons">
                        <img src="../assets/images/credit_card_visa_payment_method_icon.png" alt="VISA">
                        <img src="../assets/images/credit_card_mastercard_payment_method_icon.png" alt="Mastercard">
                        <img src="../assets/images/credit_card_americanexpress_payment_method_icon.png" alt="American Express">
                        <img src="../assets/images/credit_card_dinersclub_payment_method_icon.png" alt="Diners Club">
                        <img src="../assets/images/credit_boleto_payment_method_icon.png" alt="Boleto icon" style="background-color: #fff;">
                    </div>
                </li>
                <li class="security-icons">
                    <p class="li-title">Segurança</p>
                    <div class="payment-forms-icons">
                        <img src="../assets/images/rapid-ssl-certified.png" alt="Rapid SSL">
                        <img src="../assets/images/vtex-pci-200.png" alt="VTEX PCI">
                    </div>
                </li>
            </ul>

            <ul class="lists-footer newsletter">
                <li>
                    <form class="n-form">
                        <p class="li-title-form">Assine nosso <strong>Newsletter</strong> e receba novidades e promoções</p>
                        <input type="text" placeholder="Seu nome" class="ipt-form-newsletter">
                        <input type="email" placeholder="Seu e-mail" class="ipt-form-newsletter">
                        <input type="button" value="enviar" class="ipt-form-btn">
                    </form>
                </li>
            </ul>
        </div>
        <div class="information-footer-container">
            <p class="company-information">
                NINJA SOM COMÉRCIO DE ELETRÓNICOS LTDS - 2012 - 2019, todos os direitos reservados. Rua Santa Efigênia, 556 560/562/564 - Santa Efigênia - CEP: 56.123 000 - São Paulo/SP - CNPJ 07.222.567/0001-10
            </p>
            <div class="images-company">
                <a href="#"><img src="../assets/images/cropped-Logo-Econverse.png" alt="Econverse"></a>
                <a href=""><img src="../assets/images/VTEX_Logo.svg.png" alt="Vtex" style="filter: grayscale(100%);"></a>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
    mounted() {
        const commentsPosts = document.querySelectorAll('.cc-post-content')
        const commentsContentPosts = document.querySelector('.cc-posts')
        const btnPrevCC = document.querySelector('.cc-actions .btn-prev')
        const btnNextCC = document.querySelector('.cc-actions .btn-next')


        let currentCC = 0

        init()
        function init() {
            var _showCC = commentsContentPosts.querySelectorAll('.showCC')

            Array.prototype.forEach.call(_showCC, sh => {
                sh.classList.remove('showCC')
            })
            commentsPosts[0].classList.add('showCC')
            btnPrevCC.classList.remove('btn-active')
            btnPrevCC.classList.remove('btn-active')

            if (commentsPosts[0]) {
                btnPrevCC.classList.add('btn-active')
            } else {
                btnPrevCC.classList.remove('btn-active')
            }
        }

        addListeners()

        function addListeners() {
            btnNextCC.addEventListener('click', showCCNext)
            btnPrevCC.addEventListener('click', showCCPrev)
        }

        function showCCNext() {
            currentCC++
            showCCSlide()
        }

        function showCCPrev() {
            currentCC--
            showCCSlide()
        }

        function showCCSlide() {
            let qtd = commentsPosts.length
            let slide = currentCC % qtd
            slide = Math.abs(slide)

            if (commentsPosts[slide] == commentsPosts[0]) {
                btnPrevCC.classList.add('btn-active')
            } else {
                btnPrevCC.classList.remove('btn-active')
            }
            if (commentsPosts[slide] == commentsPosts[qtd-=1]) {
                btnNextCC.classList.add('btn-active')
            }else {
                btnNextCC.classList.remove('btn-active')
            }
            commentsContentPosts.querySelector('.showCC').classList.remove('showCC')
            commentsPosts[slide].classList.add('showCC')
        }
    }
}
</script>

<style>
.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.comments-container {
    width: 1002px;
    height: 175px;
    background: #f7f7f7;
    display: flex;
    justify-content: center;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.25);
    border-radius: 5px;
    margin-bottom: -45px;
    z-index: 10;
}
.cc-posts {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
}
.cc-posts .cc-post-content {
    width: 100%;
    align-items: center;
    justify-content: center;
    opacity: 0;
    display: flex;
    left: 0;
    position: absolute;
    transition: opacity 1s ease-out;
}
.cc-posts .showCC{
    position: absolute;
    opacity: 1;
}
.comments-container .cc-actions {
    width: 900px;
    height: 175px;
    display: flex;
    align-items: center;
    position: absolute;
    color: #707070;
    font-size: 16px;
    z-index: 10;
}
.comments-container .cc-actions i {
    cursor: pointer;
}
.comments-container .cc-user {
    display: flex;
    align-items: center;
}
.comments-container .cc-user img{
    width: 83px;
    height: 83px;
    border-radius: 50%;
    margin-right: 1vmax;
}
.comments-container .cc-user .user-name {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    color: #041E50;
    font-weight: bold;
}
.comments-container .cc-user .user-name small{
    font-weight: normal;
}
.comments-container .cc-comment-content {
    width: 542px;
    height: 76px;
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.25);
    border-radius: 5px;
    margin-left: 20px;
}
.comments-container .cc-comment-content .comment-text {
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden;
}
.footer-content {
    width: 100%;
    height: 324px;
    display: flex;
    justify-content: center;
    background-color: #041E50;
    padding-top: 10vmax;
}
.lists-footer li {
    width: 276px;
    color: #fff;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    line-height: 22px;
    margin-bottom: 3vmax;
    text-align: left;
}
.lists-footer li .li-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 1vmax;
}
.lists-footer li .li-link {
    font-size: 12px;
    font-weight: normal;
    color: #fff;
    text-decoration: none;
}
.payment-forms-li .payment-forms-icons{
    width: 120px;
}

.payment-forms-li .payment-forms-icons img {
    width: 30px;
    cursor: pointer;
    margin-right: 5px;
}
.security-icons img {
    width: 73px;
    height: 40px;
    background-color: #fff;
    margin: 0 5px;
    cursor: pointer;
}
.newsletter {
    width: 276px;
    height: 270px;
    background-color: #fff;
    border-radius: 6px;
    margin-top: -3vmax;
}
.n-form {
    display: flex;
    flex-direction: column;
    padding: 2vmax 3vmax;
}
.n-form .li-title-form {
    color: #041E50;
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 1vmax;
}
.n-form .li-title-form strong{
    font-weight: bold;
}
.n-form .ipt-form-newsletter {
    border: none;
    border-bottom: 1px solid #041E50;
    color: #041E50;
    font-size: 12px;
    text-transform: uppercase;
    padding: 0.6vmax 1vmax;
    margin-bottom: 1vmax;
}
.n-form .ipt-form-btn {
    width: 111px;
    height: 35px;
    border: 1px solid #041E50;
    border-radius: 5px;
    color: #041E50;
    background: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin-top: 1vmax;
    cursor: pointer;
}
.information-footer-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.information-footer-container p {
    width: 503px;
    font-size: 10px;
    font-weight: normal;
    color: #010101;
}
.information-footer-container .images-company {
    display: flex;
    align-items: center;
}
.information-footer-container img {
    width: 101px;
}
</style>