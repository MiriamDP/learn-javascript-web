
const tooltip = document.getElementById('detalle');
const items = document.querySelectorAll('.aditional-info');

items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const text = item.getAttribute('data-tooltip');
        tooltip.innerText = text;
        tooltip.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    item.addEventListener('mousemove', (e) => {
        tooltip.style.left = (e.clientX + 15) + 'px'; // 15px a la derecha del cursor
        tooltip.style.top = (e.clientY + 10) + 'px';  // 10px debajo del cursor
    });
});
