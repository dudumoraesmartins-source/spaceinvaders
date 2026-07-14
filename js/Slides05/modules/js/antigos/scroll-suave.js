export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        //console.log(href);
        //console.log(section);
        
        // forma simples
        // console.log(section.offsetTop);
        const topoSection = section.offsetTop;
        //window.scrollTo(0, topoSection);

        // outra forma
        // window.scrollTo({
        //     top: topoSection,
        //     behavior: 'smooth',
        // });

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
        }
    )
}