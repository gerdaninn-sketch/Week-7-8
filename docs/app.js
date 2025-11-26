const images = ['woman.jpg', 'woman2.jpg', 'woman3.jpg'];
const targetImage = document.querySelector('.image-container img');
let i = 0;

targetImage.addEventListener('click', () => {

    i++;
    if(i >= images.length) {
        i = 0;
    }
    targetImage.src = 'images/' + images[i];
})

