let items = document.querySelectorAll(`.slider .card-item`);
let next = document.getElementById(`next`);
let prev = document.getElementById(`prev`);

let active = 2; // Mulai dari card 3 (indekx 2)
function loadShow() {

  items.forEach((item) => {
    item.style.transform = "";
    item.style.top = "";
    item.style.left = "";
    item.style.zIndex = "";
    item.style.opacity = "";
  });

  items[active].style.zIndex = items.length;
  items[active].style.opacity = 1;
  items[active].style.transform = `translate(-50%, -50%)`;
  items[active].style.bottom = `5%`;
  items[active].style.left = `50%`;

  let stt = 0;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.zIndex = items.length - stt;
    items[i].style.opacity = stt > 2 ? 0 : 1;

    if (i === active + 1) {
      items[i].style.transformOrigin = "top left";
      items[i].style.transform += `translate(-50%, -50%) scale(1) rotate(-10deg)`;
      items[i].style.bottom += `-10%`;
      items[i].style.left += `80%`;
      items[i].style.color = "red";
      items[i].style.opacity = 0.6;
    } else if (i === active + 2) {
      items[i].style.transformOrigin = "bottom right";
      items[i].style.transform += `translate(-50%, -50%) scale(1) rotate(15deg)`;
      items[i].style.top += `25%`;
      items[i].style.left += `75%`;
      items[i].style.color = "black";
      items[i].style.opacity = 0.1;
    } else {
      items[i].style.color = "blue";
    }
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.zIndex = items.length - stt;
    items[i].style.opacity = stt > 2 ? 0 : 1;

    if (i === active - 1) {
      items[i].style.transformOrigin = "bottom right";
      items[i].style.transform += `translate(-50%, -50%) rotate(10deg)`;
      items[i].style.bottom += `15%`;
      items[i].style.left += `15%`;
      items[i].style.opacity = 0.6;
      items[i].style.color = "purple";
    } else if (i === active - 2) {
      items[i].style.transformOrigin = "top right";
      items[i].style.transform += `translate(-50%, -50%) rotate(-15deg)`;
      items[i].style.bottom += `-23%`;
      items[i].style.left += `17%`;
      items[i].style.opacity = 0.1;
      items[i].style.color = "red";
    } else {
      items[i].style.color = "blue";
    }
  }
}
loadShow();

next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

window.addEventListener('load', function() {
  const menu = document.getElementById('mobile-menu');
  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
});
