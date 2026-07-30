/**
 * Motor de las escenas animadas del caso AURE.
 *
 * Cada escena es un [data-aure-scene] con un .aure-panel adentro. Cuando la
 * escena entra en pantalla se le agrega .is-playing al panel y el CSS de cada
 * componente hace el resto: acá no hay estilos, solo el disparador.
 *
 * El estado final de cada escena ya está escrito en el HTML. Sin JS, o con
 * prefers-reduced-motion, la página se lee completa igual.
 */

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Cuenta hasta el número de data-to conservando el prefijo del texto final. */
const countUp = (el: HTMLElement) => {
  const to = Number(el.dataset.to ?? '0');
  if (!to) return;

  const final = el.textContent ?? '';
  const prefix = final.split(/\d/)[0] ?? '';
  const nf = new Intl.NumberFormat(el.dataset.locale || 'es-AR');
  const DUR = 1400;
  const start = performance.now();

  const step = (now: number) => {
    const p = Math.min(1, (now - start) / DUR);
    // easeOutExpo: sale rápido y se estaciona, como un contador que frena
    const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
    el.textContent = prefix + nf.format(Math.round(to * e));
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = final; // el literal del HTML manda al cerrar
  };

  requestAnimationFrame(step);
};

/** Delay declarado por el CSS (--d) del ancestro animado, en ms. */
const delayOf = (el: HTMLElement): number => {
  const host = el.closest<HTMLElement>('[style*="--d"]');
  const raw = host?.style.getPropertyValue('--d')?.trim() ?? '';
  return raw.endsWith('ms') ? parseFloat(raw) || 0 : (parseFloat(raw) || 0) * 1000;
};

export function initAureScenes() {
  const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-aure-scene]'));
  if (!scenes.length) return;

  const play = (scene: HTMLElement) => {
    const panel = scene.querySelector<HTMLElement>('.aure-panel') ?? scene;
    panel.classList.add('is-playing');
    scene.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      if (reduced()) return;
      window.setTimeout(() => countUp(el), delayOf(el));
    });
  };

  if (reduced() || !('IntersectionObserver' in window)) {
    scenes.forEach(play);
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        obs.unobserve(e.target);
        play(e.target as HTMLElement);
      });
    },
    { threshold: 0.3 }
  );

  scenes.forEach((s) => obs.observe(s));
}
