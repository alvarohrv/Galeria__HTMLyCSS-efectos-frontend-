alert('hola')

const cards = document.querySelectorAll('.split-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // solo una vez
      }
    });
  },
  {
    threshold: 0.15, // entra un poco antes de ser totalmente visible
  }
);

// Delay en cascada
cards.forEach((card, index) => {
  card.style.setProperty('--delay', `${index * 150}ms`);
  observer.observe(card);
});

// NO USA cálculos de getBoundingClientRect en loop

/**
 La card entra parcialmente al viewport
→ IntersectionObserver dispara
2️⃣ Se agrega .is-visible
→ CSS hace:
opacity: 0 → 1
translateY(40px → 0)
3️⃣ unobserve()
→ No vuelve a animarse
→ Estado final persiste
*/