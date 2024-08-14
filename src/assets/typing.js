// script de animação de digitação no techbridge vem aqui
const text = "Bem vindo, somos a TechBridge!";
const subtext = "Uma empresa de tecnologia que busca soluções inovadoras para o seu negócio.";

let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  } else {
    index = 0;
    typeWriterSubText();
  }
}

function typeWriterSubText() {
  if (index < subtext.length) {
    document.getElementById("sub-typing").innerHTML += subtext.charAt(index);
    index++;
    setTimeout(typeWriterSubText, 30);
  } else {
    index = 0;
    showButton();
  }
}

function showButton() {
  document.getElementById("learn-more").style.display = "flex";
}


typeWriter();