
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

// YouTube carousel arrows (RTL)
(() => {
  const carousel = document.getElementById("ytCarousel");
  if (!carousel) return;

  const prev = document.querySelector(".yt-prev");
  const next = document.querySelector(".yt-next");

  const scrollByAmount = () => {
    const item = carousel.querySelector(".yt-item");
    return item ? item.getBoundingClientRect().width + 18 : 380;
  };

  // In RTL: prev -> destra, next -> sinistra
  prev?.addEventListener("click", () => {
    carousel.scrollBy({ left: +scrollByAmount(), behavior: "smooth" });
  });

  next?.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  });
})();

