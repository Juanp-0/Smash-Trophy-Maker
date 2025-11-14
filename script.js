function uploadImage(id) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('El archivo es demasiado grande (máx 5MB).');
            return;
        }

        const reader = new FileReader();
        reader.onload = (ev) => {
            const img = document.getElementById(id);
            if (!img) return;
            img.src = ev.target.result; 
            img.style.display = 'inline-block';
            img.style.border = 'none';
        };
        reader.readAsDataURL(file);
    });
    input.click();
}

function adjustImagePosition(direction) {
    const img = document.getElementById('char');
    if (!img) return;
    const step = 5;
    const currentTop = parseInt(img.style.top || '0', 10);
    const currentLeft = parseInt(img.style.left || '0', 10);
    switch(direction) {
        case 'up':
            img.style.top = (currentTop - step) + 'px';
            break;
        case 'down':
            img.style.top = (currentTop + step) + 'px';
            break;
        case 'left':
            img.style.left = (currentLeft - step) + 'px';
            break;
        case 'right':
            img.style.left = (currentLeft + step) + 'px';
            break;
    }
}

function adjustImageSize(size) {
    const img = document.getElementById('char');
    if (!img) return;
    const step = 5; 
    const style = window.getComputedStyle(img);
    const currentW = parseInt(img.style.width || style.width, 10) || img.naturalWidth || 100;
    const currentH = parseInt(img.style.height || style.height, 10) || img.naturalHeight || 100;
    let newW = currentW;
    let newH = currentH;

    switch(size) {
        case 'w+':
            newW = currentW + step;
            break;
        case 'w-':
            newW = Math.max(10, currentW - step);
            break;
        case 'h+':
            newH = currentH + step;
            break;
        case 'h-':
            newH = Math.max(10, currentH - step);
            break;
    }

    img.style.width = newW + 'px';
    img.style.height = newH + 'px';
}

function logoSettings(id, parameter) {
    const img = document.getElementById(id); 
    if (img) {
        switch(parameter) {
            case 'remove':
                img.src = '';
                img.style.display = 'none';
                break;
            case 'show':
                img.src = '';
                img.style.display = 'block';
                break;
        }
    }
}

function backgroundMusic(state) {
    const audio = document.getElementById('bg-music');
    switch(state) {
        case 'play':
            audio.play();
            break;
        case 'pause':
            audio.pause();
            break;
        case 'stop':
            audio.pause();
            audio.currentTime = 0;
            break;
    }
}

function changeBackground(imagePath) {
    document.body.style.backgroundImage = `url(${imagePath})`;
}

