new Typed("#typed", {
    strings: [
        "Robôs de combate",
        "Automação inteligente",
        "Tecnologia do futuro",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card, .feedback-card, .stat-box, .product-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });
    });

    const buttons = document.querySelectorAll('.btn:not(.btn-nav):not(.btn-nav-primary)');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.97)';
        });
        btn.addEventListener('mouseup', function () {
            this.style.transform = '';
        });
        btn.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
});
