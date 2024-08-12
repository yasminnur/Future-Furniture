let items = document.querySelectorAll(`.slider .card-item`);
let next = document.getElementById(`next`);
let prev = document.getElementById(`prev`);

let active = 3;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.filter = `none`;
    items[active].style.opacity = 1;
    items[active].style.top = "25%";
    items[active].style.zIndex = items.length;
    for (var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.opacity = stt > 2 ? 0 : 1;
        items[i].style.zIndex = items.length - stt;
        console.log(`Card ${i} zIndex: `, items[i].style.zIndex)

        if (i === active + 1) {
            items[i].style.transformOrigin += "top left";
            items[i].style.transform += `translateX(${270 * stt}px) translateY(50%) rotate(-15deg)`;
            items[i].style.color += 'red';
        } else {
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.color += 'blue';
        }
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.opacity = stt > 2 ? 0 : 1;
        items[i].style.zIndex = items.length - stt;

        if (i === active - 1) {
            items[i].style.transformOrigin += "bottom right";
            items[i].style.transform += `translateX(${-270 * stt}px) translateY(-50%) rotate(15deg)`;
            items[i].style.color += 'red';
        } else {
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.color += 'blue';
        }
    }

    
}

loadShow();

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}