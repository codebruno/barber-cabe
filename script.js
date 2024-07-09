// Seleciona o elemento header
const header = document.querySelector('header');

// Função para verificar a posição do scroll e adicionar/remover a classe 'scrolled'
function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Adiciona um listener para o evento de scroll
window.addEventListener('scroll', handleScroll);

// Ao clicar o Menu aparece ou some
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um item do menu
navMenu.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

