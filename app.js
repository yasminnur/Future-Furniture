let items = document.querySelectorAll(`.slider .card-item`);
let next = document.getElementById(`next`);
let prev = document.getElementById(`prev`);

// let active = 3;
let active = 2; // Mulai dari card pertama atau set sesuai kebutuhan
function loadShow() {
    const slider = document.querySelector('.slider');
    const sliderWidth = slider.clientWidth;
    const sliderHeight = slider.clientHeight;
    const cardWidth = items[0].clientWidth; // Asumsi semua card memiliki lebar yang sama
    const cardHeight = items[0].clientHeight; // Asumsi semua card memiliki tinggi yang sama
    let activeCardHeight = items[active].offsetHeight;
    console.log("tinggi kartu active = ", activeCardHeight)
    console.log("sliderWidth = ", sliderWidth)
    // console.log("sliderHeight = ", sliderHeight)

    // Hapus style transform dari semua card
    items.forEach(item => {
        item.style.transform = '';
        item.style.top = '';
        item.style.left = '';
        item.style.zIndex = '';
        item.style.opacity = '';
    });

    items[active].style.zIndex = items.length;
    items[active].style.opacity = 1;
    items[active].style.transform = `translate(-50%, -50%)`; 
    items[active].style.top = `50%`;
    items[active].style.left = `50%`;
     
    let stt = 0;
    for (var i = active + 1; i < items.length; i++){
        stt++;
        let translateX = (sliderWidth / 2) + (120 * stt); // Hitung posisi X relatif dari tengah slider
        let translateY = (sliderHeight / 2);
        // let translateY = (activeCardHeight / 2);
        console.log("tinggi kartu active = ", translateY)
        items[i].style.opacity = 0.8;
        items[i].style.zIndex = items.length - stt;

        if (i === active + 1) {
            items[i].style.transformOrigin = "top left";
            items[i].style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(-15deg)`;
            items[i].style.color = 'red';
        } else {
            items[i].style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(-15deg)`;
            // items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.color = 'blue';
        }
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--){
        stt++;
        let translateX = -(sliderWidth / 2) + (450 * stt); // Hitung posisi X relatif dari tengah slider
        let translateY = -(sliderHeight / 2) + (400 * stt);
        // items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.opacity = 0.8;
        items[i].style.zIndex = items.length - stt;
        // stt++;
        // items[i].style.opacity = stt > 2 ? 0 : 1;
        // items[i].style.zIndex = items.length - stt;

        if (i === active - 1) {
            items[i].style.transformOrigin = "bottom right";
            items[i].style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(15deg)`;
            // items[i].style.opacity = 0.6;
            items[i].style.color = 'purple';
        } else {
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.color = 'blue';
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