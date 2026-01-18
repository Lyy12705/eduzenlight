const slide = document.querySelector(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function applyClasses(){
  const items = [...slide.querySelectorAll(".item")];
  items.forEach(el => el.classList.remove("active","next","next2"));

  if(items[0]) items[0].classList.add("active"); // ✅ 全螢幕背景
  if(items[1]) items[1].classList.add("next");   // 右側第一張預覽
  if(items[2]) items[2].classList.add("next2");  // 右側第二張預覽
}

function next(){
  const items = slide.querySelectorAll(".item");
  if(items.length <= 1) return;
  slide.appendChild(items[0]); // 把第一張丟到最後
  applyClasses();
}

function prev(){
  const items = slide.querySelectorAll(".item");
  if(items.length <= 1) return;
  slide.prepend(items[items.length - 1]); // 把最後一張拉到最前
  applyClasses();
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// 鍵盤支援
window.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") next();
  if(e.key === "ArrowLeft") prev();
});

applyClasses();