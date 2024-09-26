document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.comprar-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });
});
