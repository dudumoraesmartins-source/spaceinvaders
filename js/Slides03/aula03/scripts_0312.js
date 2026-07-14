function initTabNav() {
    // essa função isola o escopo das variáveis
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                    section.classList.remove('ativo');
                }
            );
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
                itemMenu.addEventListener('click', () => {
                    activeTab(index);
                    }
                );
            }
        );
    }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const ativeClass = 'ativo';
    if(accordionList.length) {
        // ACCORDION LIST
        accordionList[0].classList.add(ativeClass);
        accordionList[0].nextElementSibling.classList.add(ativeClass);
        function activeAccordion(event) {
            //console.log(event.currentTarget); ou
            //console.log(this);
            // toggle, se não está ativo, fecha
            this.classList.toggle(ativeClass);
            this.nextElementSibling.classList.toggle(ativeClass);
            // vai me retornar o dd
        }
        accordionList.forEach(
            (item) => {
                item.addEventListener('click', activeAccordion);
            }
        );
    }
}
initAccordion();


function initScrollSuave() {
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
initScrollSuave();

function initAnimacaoScroll() {
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

initAnimacaoScroll();
