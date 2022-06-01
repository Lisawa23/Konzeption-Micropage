

window.addEventListener("load", function(): void {
let text: HTMLElement = document.querySelector(".text");
let hideBlock: HTMLElement = document.querySelector(".timeline-panel");
document.querySelector(".mfirst").addEventListener("mouseover", function(): void {
  hideBlock.classList.remove("hidden");
  text.innerHTML = "...";
});
document.querySelector(".mfirst").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});
document.querySelector(".m2").addEventListener("mouseover", function(): void {
  hideBlock.classList.remove("hidden");
  text.innerHTML = "...1";
});
document.querySelector(".m2").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});
document.querySelector(".m3").addEventListener("mouseover", function(): void {
  hideBlock.classList.remove("hidden");
  text.innerHTML = "...2";
});
document.querySelector(".m3").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});
document.querySelector(".m4").addEventListener("mouseover", function(): void {
  hideBlock.classList.remove("hidden");
  text.innerHTML = "...3";
});
document.querySelector(".m4").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});
document.querySelector(".mlast").addEventListener("mouseover", function(): void {
  hideBlock.classList.remove("hidden");
  text.innerHTML = "...4";
});
document.querySelector(".mlast").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});


});