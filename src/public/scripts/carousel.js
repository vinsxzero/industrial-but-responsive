const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);

items.forEach((item) => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});
