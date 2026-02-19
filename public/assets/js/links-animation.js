const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) startListening();

function startListening() {
  const animatableLinks = [...document.querySelectorAll('a')].filter(
    // только те ссылки, внутри которых один текст
    (link) => link.childNodes.length === 1 && link.childNodes[0].nodeType === Node.TEXT_NODE,
  );

  animatableLinks.forEach((link) => {
    link.addEventListener('pointerenter', () => runAnimation(link), { passive: true });
    link.addEventListener(
      'focus',
      (event) => {
        if (event.target.matches(':focus-visible')) runAnimation(link);
      },
      { passive: true },
    );
  });
}

function runAnimation(link) {
  if (link.isAnimating) return;
  link.isAnimating = true;
  const originalText = link.textContent;
  const newText = generateRandomString(originalText);
  const oneFrameLengthMs = 60;
  const totalFrames = 6;

  // сколько символов менять за кадр
  const batchSize = Math.max(1, Math.round(originalText.length * 0.15));
  const shuffledIndexes = [...newText].map((_, index) => index).sort(() => Math.random() - 0.5);
  const interval = setInterval(() => {
    const indexesToUpdate = shuffledIndexes.splice(0, batchSize);
    const textArray = [...originalText];
    indexesToUpdate.forEach((index) => {
      textArray[index] = newText[index];
      link.textContent = textArray.join('');
    });
  }, oneFrameLengthMs);

  setTimeout(() => {
    clearInterval(interval);
    link.textContent = originalText;
    link.isAnimating = false;
  }, oneFrameLengthMs * totalFrames);
}

function generateRandomString(text) {
  const chars =
    'abcdefghijklmnopqrstuvwxyz' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'абвгдеёжзийклмнопрстуфхцчшщъыьэюя' +
    'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ' +
    '0123456789' +
    '!@#$%^&*()_+-=[]{}|;:\'",.<>?/~`';

  let result = '';

  for (const ch of text) {
    // сохраняем пробелы/табы/переносы на своих местах
    if (/\s/.test(ch)) {
      result += ch;
      continue;
    }

    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}
