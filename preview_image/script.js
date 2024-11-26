function previewImage(event) {
    const showImage = document.getElementById('previewContainer');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            //check if the showImage container is empty.
            showImage.innerHTML = '';
            showImage.appendChild(img);
        };

        reader.readAsDataURL(file);
    } else {
        //keep container empty
        showImage.innerHTML = 'No image selected';
    };
};