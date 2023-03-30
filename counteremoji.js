const icons = document.querySelectorAll('img');

function countClicks() {
    icons.forEach(icon => {
      let count = 0;
      icon.addEventListener('click', () => {
        count++;
        const counter = icon.nextElementSibling;
        counter.innerText = count;
      });
  });
}
  
countClicks();