(function () {
  var script = document.currentScript;
  var configuredCount = script && Number.parseInt(script.dataset.count, 10);
  var count = Number.isFinite(configuredCount) ? configuredCount : 34;
  var color = (script && script.dataset.color) || 'rgba(255, 255, 255, 0.88)';
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  count = Math.max(0, Math.min(100, count));
  if (prefersReducedMotion) count = Math.ceil(count * 0.45);
  if (!count || !document.body) return;

  var layer = document.createElement('div');
  layer.id = 'snowfall-layer';
  layer.setAttribute('aria-hidden', 'true');

  for (var i = 0; i < count; i++) {
    var flake = document.createElement('span');
    var duration = (prefersReducedMotion ? 28 : 14) + Math.random() * (prefersReducedMotion ? 16 : 10);

    flake.className = 'snowfall-flake';
    flake.textContent = '❄';
    flake.style.left = Math.random() * 100 + '%';
    flake.style.color = color;
    flake.style.fontSize = 9 + Math.random() * 12 + 'px';
    flake.style.opacity = (0.4 + Math.random() * 0.45).toFixed(2);
    flake.style.setProperty('--snow-drift', Math.round(-46 + Math.random() * 92) + 'px');
    flake.style.setProperty('--snow-duration', duration.toFixed(1) + 's');
    flake.style.animationDelay = -Math.random() * duration + 's';
    layer.appendChild(flake);
  }

  document.body.appendChild(layer);
})();
