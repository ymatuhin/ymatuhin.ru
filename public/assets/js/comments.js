startListener();
preselectDefaultCommentSystem();

function preselectDefaultCommentSystem() {
  const tgInput = document.querySelector('input[name="comments-system"][value="telegram"]');
  const vkInput = document.querySelector('input[name="comments-system"][value="vk"]');

  if (navigator.language.includes('ru')) {
    vkInput.setAttribute('checked', 'checked');
    tgInput.removeAttribute('checked');
  } else {
    tgInput.setAttribute('checked', 'checked');
    vkInput.removeAttribute('checked');
  }
}

function startListener() {
  const commentsContainer = document.querySelector('.js-comments');
  if (!commentsContainer) throw new Error('Comments container not found');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01,
  };
  const observer = new IntersectionObserver(initComments, observerOptions);
  observer.observe(commentsContainer);
}

function initComments(entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  observer.unobserve(entry.target);
  renderComments();
}

function renderComments() {
  const content = document.querySelector('.js-comments-content');
  if (!content) throw new Error('Comments content container not found');

  content.innerHTML = `
    <div data-platform="telegram"></div>
    <div data-platform="vk">
      <div id="vk_comments"></div>
    </div>
  `;

  renderTelegramWidget(content.querySelector('[data-platform="telegram"]'));
  renderVkWidget();
}

function renderTelegramWidget(container) {
  if (!container) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://telegram.org/js/telegram-widget.js?22';
  script.setAttribute('data-telegram-discussion', 'yury_matuhin');
  script.setAttribute('data-comments-limit', '5');
  script.setAttribute('data-color', 'b4befe');
  script.setAttribute('data-dark', '1');
  container.appendChild(script);
}

function renderVkWidget() {
  const script = document.createElement('script');
  script.src = 'https://vk.ru/js/api/openapi.js?169';
  script.type = 'text/javascript';
  script.onload = initVkComments;
  document.head.appendChild(script);
}

function initVkComments() {
  if (!window.VK) return;
  window.VK.init({ apiId: 54457625, onlyWidgets: true });
  window.VK.Widgets.Comments('vk_comments', { limit: 20, attach: '*' });
}
