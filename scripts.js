// Анимация для кнопок
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    button.style.transform = 'translateY(-6px) scale(1.05)';
    button.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0) scale(1)';
    button.style.boxShadow = 'none';
  });
});

// Анимация для карточек (ссылок)
const cards = document.querySelectorAll('.card-link');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    card.style.transform = 'translateY(-6px) scale(1.03)';
    card.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
  });
});
