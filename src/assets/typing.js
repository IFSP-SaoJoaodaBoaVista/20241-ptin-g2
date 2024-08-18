const text = "Bem-vindo, somos a TechBridge!";
const subtext = "Uma empresa de tecnologia que busca soluções inovadoras para o seu negócio.";

let index = 0;

function typeWriter() {
  if (index < text.length) {
    updateTextContent('typing', document.getElementById('typing').innerHTML + text.charAt(index));
    index++;
    setTimeout(typeWriter, 50);
  } else {
    index = 0;
    typeWriterSubText();
  }
}

function typeWriterSubText() {
  if (index < subtext.length) {
    updateTextContent('sub-typing', document.getElementById('sub-typing').innerHTML + subtext.charAt(index));
    index++;
    setTimeout(typeWriterSubText, 30);
  } else {
    index = 0;
    showButton();
  }
}

function showButton() {
  const scrollPosition = window.scrollY;
  document.getElementById("learn-more").style.display = "flex";
  window.scrollTo(0, scrollPosition);
}

function updateTextContent(elementId, newText) {
    const scrollPosition = window.scrollY;
    const element = document.getElementById(elementId);
    element.innerHTML = newText;
    window.scrollTo(0, scrollPosition);
}

typeWriter();