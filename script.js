const img = document.querySelectorAll('img')
let idx = 0;
document.getElementById('img1').style.display = 'block'
setInterval(() => {
    idx++;
    if (idx == 1) {
        document.getElementById('img1').style.display = 'block'
        document.getElementById('img2').style.display = 'none'
    } else if(idx == 2) {
        document.getElementById('img2').style.display = 'block'
        document.getElementById('img1').style.display = 'none'
    }
    if (idx > img.length - 1) {
        idx = 0
    }
}, 3000)
