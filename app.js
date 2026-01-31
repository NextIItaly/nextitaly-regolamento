
function doSearch(q){
  if(!q) return;
  // open https://next-italy.gitbook.io/next-italy-regolamento/ with query param
  window.location.href = "https://next-italy.gitbook.io/next-italy-regolamento/" + encodeURIComponent(q);
}

function highlightQuery(){
  const params = new URLSearchParams(location.search);
  const q = (params.get('q')||'').trim();
  const input = document.getElementById('q');
  if(input) input.value = q;
  if(!q) return;
  const pre = document.querySelector('pre.raw');
  if(!pre) return;
  const text = pre.innerHTML;
  try{
    const rx = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')','gi');
    pre.innerHTML = text.replace(rx, '<mark>$1</mark>');
  }catch(e){ /* ignore bad regex */ }
}

document.addEventListener('DOMContentLoaded', highlightQuery);

// YouTube carousel arrows — FIX DEFINITIVO per row-reverse
(() => {
  const carousel = document.getElementById("ytCarousel");
  if (!carousel) return;

  const btnLeft  = document.querySelector(".yt-prev"); // freccia SINISTRA
  const btnRight = document.querySelector(".yt-next"); // freccia DESTRA

  const getStep = () => {
    const item = carousel.querySelector(".yt-item");
    return item ? item.offsetWidth + 18 : 380;
  };

  // Parti dall'estrema destra al load
  window.addEventListener("load", () => {
    carousel.scrollLeft = carousel.scrollWidth;
  });

  // 🔹 FRECCIA SINISTRA → vai a SINISTRA (video precedente)
  btnLeft?.addEventListener("click", () => {
    carousel.scrollLeft += getStep();
  });

  // 🔹 FRECCIA DESTRA → vai a DESTRA (video successivo)
  btnRight?.addEventListener("click", () => {
    carousel.scrollLeft -= getStep();
  });
})();


