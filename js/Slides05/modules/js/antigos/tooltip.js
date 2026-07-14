export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    })

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);
        tooltipBox.style.top = event.pageY + 'px';
        tooltipBox.style.left = event.pageX + 'px';

        /* mouse moove */
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);

        /* chama o objeto criado e ativa o handleEvent */
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }

    /* transforma em objeto */
    const onMouseLeave = {
        tooltipBox: '',
        element: '',
        /* mas tem q ter o handleEvent */
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}

