const imageData = [
    './assets/LEO.jpg',
    './assets/JAILER.jpg',
    './assets/AYALAAN.jpg',
    './assets/VIDAMUYARCHCHI.jpg',
    './assets/CHITHTHA.jpg',
    './assets/CHANDRAMUKHI2.jpg',
    './assets/MYAYON.jpg',

];


        function renderImages(images) {
            const container = document.querySelector('.images');
            container.innerHTML = '';

            images.forEach(image => {
                const lement = document.createElement('img');
                lement.src = image;
                lement.alt = '';

                const item = document.createElement('div');
                item.classList.add('image-box');

                const text = document.createElement('div');
                text.classList.add('text');
                const imageName = image.split('/').pop().split('.')[0];
                text.textContent = imageName;

                item.appendChild(lement);
                item.appendChild(text);

                container.appendChild(item);
            });
        }

        function handleSearch() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const filteredImages = imageData.filter(image => image.toLowerCase().includes(searchTerm));
            renderImages(filteredImages);
        }

        renderImages(imageData);

        document.getElementById('search-input').addEventListener('input', handleSearch);