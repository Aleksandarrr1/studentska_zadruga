  const text = "Freelance studenti";
  const titleElement = document.getElementById("typewriter-title");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      titleElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // brzina ispisivanja
    }
  }

  // Pokreni animaciju kad se stranica učita
  window.addEventListener("DOMContentLoaded", typeWriter);