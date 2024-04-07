const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosOcultos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
})

function mostrarMaisProjetos() {
    projetosOcultos.forEach(projetoOculto => {
        projetoOculto.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}
