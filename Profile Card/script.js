let btn = document.querySelector('button');
btn.addEventListener("click" , function(){
    if(btn.innerText==='Follow'){
        this.innerText="Followed";
        this.style.backgroundColor="grey";
    }else{
        this.innerText='Follow';
        this.style.backgroundColor="rgba(206, 31, 197, 0.856)";
    }
});

