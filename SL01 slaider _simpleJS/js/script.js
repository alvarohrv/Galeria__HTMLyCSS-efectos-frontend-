alert('hola')
const slider = document.getElementById('id_slider_04')
const btnPrev = document.querySelector('.btn.prev')
const btnNext = document.querySelector('.btn.next')

// ancho de una imagen + gap
const scrollAmount = 260

btnNext.addEventListener('click', () => {
  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' })
})

btnPrev.addEventListener('click', () => {
  slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
})