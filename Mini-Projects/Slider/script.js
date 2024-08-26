var idxVal = 0;
function Slideshow() {
    setTimeout(Slideshow,2500);
    var x;
    const img = document.querySelectorAll('img');
    for(x=0;x<img.length ; x++){
        img[x].style.display='none';
    }
    idxVal++;
    if(idxVal > img.length){
        idxVal =1;
    }
    img[idxVal-1].style.display='block';
}
Slideshow();