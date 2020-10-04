function addImg(keyword, index) {
    const img = document.createElement('img');
    img.src = `https://source.unsplash.com/400x225?${keyword}&sig=${index}`;

    const gallery = document.querySelector(".gallery");
    gallery.appendChild(img);
}

function searchPhoto(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword) {
        removeAllPhoto();
        for (let i = 0; i <= 9; i++) {
            addImg(keyword, i);
        }
    }
}

function removeAllPhoto() {
    const galleryElemant = document.querySelector(".gallery");
    galleryElemant.innerHTML = '';
}

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}


function main() {
    const inputControls = document.querySelectorAll('.controls input');
    inputControls.forEach((input)=>{input.addEventListener('change',handleUpdate);});
    inputControls.forEach((input)=>{input.addEventListener('mousemove',handleUpdate);});

    const inputElement = document.querySelector('.search');
    inputElement.addEventListener('keydown', searchPhoto);
}


main();