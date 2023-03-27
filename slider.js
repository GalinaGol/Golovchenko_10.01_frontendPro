let offset = 0

const sliderLine = document.querySelector('.slider-line')

const btnPrev = document.querySelector(".slider-prev");

const btnNext = document.querySelector(".slider-next");


document.querySelector('.slider-next').addEventListener('click', function() {
     if (!btnNext.classList.contains('disabled')) { 
          offset = offset + 600
          if (offset > 1200) {
               offset = 0
          }
          sliderLine.style.left = -offset + 'px'
          updateButtons() 
     }
})

document.querySelector('.slider-prev').addEventListener('click', function() {
     if (!btnPrev.classList.contains('disabled')) { 
          offset = offset - 600
          if (offset < 0) {
               offset = 1200
          }
          sliderLine.style.left = -offset + 'px'
          updateButtons() 
     }
})

function updateButtons() {
     if (offset === 0) { 
          btnPrev.classList.add('disabled')
     } else {
          btnPrev.classList.remove('disabled')
     }

     if (offset === 1200) { 
          btnNext.classList.add('disabled')
     } else {
          btnNext.classList.remove('disabled')
     }
}