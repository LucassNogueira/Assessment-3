const eatingBtn = document.querySelector('#eating')


const randomPlace = () {
    const num = Math.floor(Math.random() * 4)
    
    switch (num) {
        case 0:
            window.open('https://www.cafesicilia.com/', '_blank');
        case 1:
            window.open('https://www.raisingcanes.com', "_blank");
        case 2:
            window.open('https://www.olivegarden.com/home', "_blank");
        case 3:
            window.open('https://cicis.com/', "_blank");
    }
    
}



eatingBtn.addEventListener('click', randomPlace)