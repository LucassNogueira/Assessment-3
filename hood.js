const eatingBtn = document.querySelector('#eating')


const randomPlace = () {
    let num = 0
    num = Math.floor(Math.random() * 4)
    switch(num){
        case 0:
         alert('https://www.cafesicilia.com/');
            
        case 1:
          alert('https://www.raisingcanes.com');
          
        case 2:
           alert('https://www.olivegarden.com/home');
            
        case 3:
          alert('https://cicis.com/');
            
    }
    
}



eatingBtn.addEventListener('click', randomPlace)