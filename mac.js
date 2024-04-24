let  macBook = {
    "Space Grey": 'img/Space Gray.png',
    "White":'img/White.png' 
  
}

let btn = document.querySelectorAll('.color')
let img = document.querySelector('.left')

btn.forEach ((btn) => {
    btn.onclick = () => {
        const url = macBook[btn.innerText]
        img.style.backgroundImage = `url(${url})`
    }
}) 