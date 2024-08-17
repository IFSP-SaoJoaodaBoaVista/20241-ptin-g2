// Selecione todos os botões que têm o atributo data-target
const botoes = document.querySelectorAll('button[data-target]');

// Altura do cabeçalho fixo
const alturaCabecalho = document.querySelector('header').offsetHeight;

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // Obtenha o seletor da seção destino do atributo data-target
    const seletorDestino = botao.getAttribute('data-target');
    const elementoDestino = document.querySelector(seletorDestino);

    if (elementoDestino) {
      // Calcule a posição com ajuste para o cabeçalho
      const posicao = elementoDestino.getBoundingClientRect().top + window.pageYOffset - alturaCabecalho - 50;

      // Faça o scroll suave para o elemento destino
      window.scrollTo({ top: posicao, behavior: 'smooth' });
    }
  });
});