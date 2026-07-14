export default function initAccordion() {
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