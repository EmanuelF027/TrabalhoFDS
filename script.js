
var botao = document.getElementById('botaoMensagem');
var mensagemDiv = document.getElementById('mensagem');


botao.onclick = function() {

  
  if (mensagemDiv.style.display === 'block') {

    
    mensagemDiv.style.display = 'none';
    botao.textContent = 'Clique para ver uma mensagem!';

  } else {


    mensagemDiv.style.display = 'block';
    mensagemDiv.innerHTML = '🌟 "A melhor forma de prever o futuro é criá-lo!" - Continue estudando e crescendo!';
    botao.textContent = 'Esconder Mensagem';
  }
  
};