function doSearch(q){
  if(!q) return;
  window.location.href =
    "https://next-italy.gitbook.io/next-italy-regolamento/" +
    encodeURIComponent(q);
}

function highlightQuery(){
  const params = new URLSearchParams(location.search);
  const q = (params.get('q') || '').trim();
  const input = document.getElementById('q');
  if(input) input.value = q;
  if(!q) return;
  const pre = document.querySelector('pre.raw');
  if(!pre) return;
  const text = pre.innerHTML;
  try{
    const rx = new RegExp(
      '(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')',
      'gi'
    );
    pre.innerHTML = text.replace(rx, '<mark>$1</mark>');
  }catch(e){}
}

document.addEventListener('DOMContentLoaded', highlightQuery);

/* ===============================
   YouTube carousel — FIX DEFINITIVO
   Compatibile con row-reverse
================================ */
(() => {
  const carousel = document.getElementById("ytCarousel");
  if (!carousel) return;

  const btnLeft  = document.querySelector(".yt-prev"); // freccia SINISTRA
  const btnRight = document.querySelector(".yt-next"); // freccia DESTRA

  const getStep = () => {
    const item = carousel.querySelector(".yt-item");
    return item ? item.getBoundingClientRect().width + 18 : 380;
  };

  // Parti dalla fine (destra) al caricamento
  window.addEventListener("load", () => {
    carousel.scrollLeft = carousel.scrollWidth;
  });

  // 👉 LOGICA CORRETTA CON row-reverse
  // Freccia SINISTRA = video precedente
  btnLeft?.addEventListener("click", () => {
    carousel.scrollLeft -= getStep();
  });

  // Freccia DESTRA = video successivo
  btnRight?.addEventListener("click", () => {
    carousel.scrollLeft += getStep();
  });
})();
