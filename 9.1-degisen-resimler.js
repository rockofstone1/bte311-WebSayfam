const randomImages = [
    'Darius_0.jpg',
    'Garen_0.jpg',
    'Jhin_0.jpg',
    'Neeko_0.jpg',
    'Yorick_0.jpg',
    'spongebob_1.jpg',
    'tomandjerry_1.jpg',
    'samurayjack_1.jpg',
    'Ben_10.jpg',
    'Mufettis_Gadget_1.jpg',


    // Diğer resim isimlerini ekleyebilirsiniz.
];

const images = Array.from({ length: 3 }, (_, i) => `Image${i + 1}.jpg`);

function initializePage() {
    changeRandomImage();
    changeBackgroundImage();
    showImages();
}

function changeRandomImage() {
    const randomImage = document.getElementById('randomImage');
    const randomImageIndex = Math.floor(Math.random() * randomImages.length);
    randomImage.src = randomImages[randomImageIndex];
}

function changeBackgroundImage() {
    document.body.style.background = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showImages() {
    for (let i = 1; i <= 3; i++) {
        const image = document.getElementById(`image${i}`);
        const randomImageIndex = Math.floor(Math.random() * randomImages.length);
        image.src = randomImages[randomImageIndex];
        image.style.display = 'block';
    }
}

function toggleImage(imageNumber, hide) {
    const image = document.getElementById(`image${imageNumber}`);
    image.style.display = hide ? 'none' : 'block';
}


