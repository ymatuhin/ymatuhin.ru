document.addEventListener('DOMContentLoaded', startListening);

function startListening() {
  const allAnimatableLinks = [...document.querySelectorAll('a')]
    .filter((link) => !link.innerHTML.includes('<img'))
    .filter(
      (link) => link.childNodes.length === 1 && link.childNodes[0].nodeType === Node.TEXT_NODE,
    );

  allAnimatableLinks.forEach((link) => {
    link.addEventListener('pointerover', () => runAnimation(link), { passive: true });
    link.addEventListener(
      'focus',
      (event) => {
        if (event.target.matches(':focus-visible')) runAnimation(link);
      },
      { passive: true },
    );
    link.addEventListener('pointerleave', () => (link.isAnimating = false), { passive: true });
    link.addEventListener('blur', () => (link.isAnimating = false), { passive: true });
  });
}

function runAnimation(element) {
  if (element.isAnimating) return;
  element.isAnimating = true;
  const originalText = element.textContent;
  const newText = generateRandomString(originalText.length);

  const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * newText.length);
    const textArray = [...originalText];
    textArray[randomIndex] = newText[randomIndex];
    element.textContent = textArray.join('');
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    element.textContent = originalText;
  }, 333);
}

function generateRandomString(length) {
  const chars =
    'abcdefghijklmnopqrstuvwxyz' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'абвгдеёжзийклмнопрстуфхцчшщъыьэюя' +
    'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ' +
    '0123456789' +
    '!@#$%^&*()_+-=[]{}|;:\'",.<>?/~`';

  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}
