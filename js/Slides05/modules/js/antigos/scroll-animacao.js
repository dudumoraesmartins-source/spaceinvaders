export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            //console.log('Sim');
            sections.forEach((section) => {
                // getBounding devolve um objeto com todas as medidas
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionTop - windowMetade < 0;
                // console.log(sectionTop);
                //if (sectionTop < 0) {
                if (isSectionVisible) {
                    //console.log('animar');
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            })
        }
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}