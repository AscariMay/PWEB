function abrirJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./img/janelaaberta.png')";
    document.getElementById('estado').textContent = "Janela Aberta.";
  }

  function fecharJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./img/janelafechada.png')";
    document.getElementById('estado').textContent = "Janela Fechada.";
  }

  function quebrarJanela() {
    document.getElementById('janela').style.backgroundImage = "url('./img/janelaquebrada.png')";
    document.getElementById('estado').textContent = "Janela Quebrada!";
  }