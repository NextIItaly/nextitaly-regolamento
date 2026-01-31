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

// YouTube carousel — versione DEFINITIVA (no inversioni)
(() => {
  const carousel = document.getElementById("ytCarousel");
  if (!carousel) return;

  const btnLeft  = document.querySelector(".yt-prev"); // ⬅
  const btnRight = document.querySelector(".yt-next"); // ➡

  const step = () => {
    const item = carousel.querySelector(".yt-item");
    return item ? item.offsetWidth + 18 : 380;
  };

  // 🔥 parte dall’ultimo video (a destra)
  window.addEventListener("load", () => {
    carousel.scrollLeft = carousel.scrollWidth;
  });

  // ⬅ video precedente
  btnLeft?.addEventListener("click", () => {
    carousel.scrollBy({ left: -step(), behavior: "smooth" });
  });

  // ➡ video successivo
  btnRight?.addEventListener("click", () => {
    carousel.scrollBy({ left: step(), behavior: "smooth" });
  });
})();

})();
