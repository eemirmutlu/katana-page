const container1 = document.querySelector('.box1');

container1.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / window.innerWidth) * 100; // Mouse'un x pozisyonu
    const yPos = (e.clientY / window.innerHeight) * 100; // Mouse'un y pozisyonu

    container1.style.backgroundPosition = `${xPos}% ${yPos}%`;
});

const container2 = document.querySelector('.box2');

container2.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / window.innerWidth) * 100; // Mouse'un x pozisyonu
    const yPos = (e.clientY / window.innerHeight) * 100; // Mouse'un y pozisyonu

    container2.style.backgroundPosition = `${xPos}% ${yPos}%`;
});

const container3 = document.querySelector('.box3');

container3.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / window.innerWidth) * 100; // Mouse'un x pozisyonu
    const yPos = (e.clientY / window.innerHeight) * 100; // Mouse'un y pozisyonu

    container3.style.backgroundPosition = `${xPos}% ${yPos}%`;
});

const container4 = document.querySelector('.box4');

container4.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / window.innerWidth) * 100; // Mouse'un x pozisyonu
    const yPos = (e.clientY / window.innerHeight) * 100; // Mouse'un y pozisyonu

    container4.style.backgroundPosition = `${xPos}% ${yPos}%`;
});

const container5 = document.querySelector('.box5');

container5.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / window.innerWidth) * 100; // Mouse'un x pozisyonu
    const yPos = (e.clientY / window.innerHeight) * 100; // Mouse'un y pozisyonu

    container5.style.backgroundPosition = `${xPos}% ${yPos}%`;
});

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const overlay = document.querySelector('.overlay');

    loader.style.display = 'none';
    overlay.style.display = 'none';
});