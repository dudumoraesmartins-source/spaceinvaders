export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    // console.log(botaoAbrir, botaoFechar, containerModal);

    if(botaoAbrir && botaoFechar && containerModal) {
        function toggleModal() {
            event.preventDefault();
            containerModal.classList.toggle('ativo');
            // console.log(event);
        }
        

        // PAREI DE USAR, TOGGLE ADICIONA QUANDO NAO TEM E REMOVE QUANDO TEM
        function abrirModal() {
            event.preventDefault();
            containerModal.classList.add('ativo');
            // console.log(event);
        }
        // PAREI DE USAR, TOGGLE ADICIONA QUANDO NAO TEM E REMOVE QUANDO TEM
        function fecharModal() {
            event.preventDefault();
            containerModal.classList.remove('ativo');
            // console.log(event);
        }


        function cliqueForaModal(event) {
            // console.log(this);
            // console.log(event.target);
            if(event.target === this) {
                fecharModal();
            }
        }

        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}