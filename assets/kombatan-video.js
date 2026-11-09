/* Kombatan video player: hent weboptimeret MP4 i statiske binære dele, når brugeren vælger at se den. */
(function () {
  'use strict';
  function init() {
    const panel = document.querySelector('[data-kombatan-video]');
    if (!panel) return;
    const button = panel.querySelector('[data-video-start]');
    const video = panel.querySelector('.case-video-media');
    const status = panel.querySelector('[data-video-status]');
    button.addEventListener('click', async () => {
      button.disabled = true;
      status.textContent = 'Indlæser filmen …';
      try {
        const segments = await Promise.all(
          Array.from({length: 11}, (_, index) => {
            const part = String(index + 1).padStart(2, '0');
            return fetch('assets/kombatan-film/segment-' + part + '.bin')
              .then(response => {
                if (!response.ok) throw new Error('HTTP ' + response.status);
                return response.arrayBuffer();
              });
          })
        );
        if (segments.some(part => part.byteLength === 0)) throw new Error('Tom videofil');
        const source = URL.createObjectURL(new Blob(segments, {type: 'video/mp4'}));
        video.src = source;
        panel.classList.add('is-ready');
        video.hidden = false;
        button.hidden = true;
        status.textContent = '';
        video.addEventListener('error', () => {
          status.textContent = 'Filmen kunne ikke afspilles i denne browser.';
        }, {once: true});
        try {
          await video.play();
        } catch (_) {
          status.textContent = 'Tryk på afspil i videofeltet.';
        }
      } catch (_) {
        status.textContent = 'Filmen kunne ikke indlæses. Prøv igen.';
        button.disabled = false;
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
