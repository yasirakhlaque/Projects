const btn = document.querySelector('.search');

function Data(image, Name, age, cgpa, langKnown, instaLink, linkedinLink, githubLink) {

    const html = ` <div class="imgbox">
                    <div class="img">
                        <img src="${image}.jpg" alt="pic">
                    </div>
                </div>
                <div class="input-area">
                    <input type="text" placeholder="Type your name" name="name" class="inpBox">
                    <button class="search">Search</button>
                </div>
                <div class="data">
                    <h2 class="name">${Name}</h2>
                    <p>age :<span class="age">${age}</span></p>
                    <div class="abt">
                        <h4>About</h4>
                        <p>He Is a very good boy . he is currently pursuing B.E. CSE from I.E.T. Khandari</p>
                        <p class="marks"> C.G.P.A. : <span class="cgpa">${cgpa}</span></p>
                        <p class="known">
                            Language known : <span class="lang">${langKnown}</span>
                        </p>
                        <p class="Social">
                        <ul>
                            <li> <a href="${instaLink}"><i class="fa-brands fa-instagram"></i></a></li>
                            <li> <a href="${linkedinLink}"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li> <a href="${githubLink}"><i class="fa-brands fa-github"></i></a></li>
                        </ul>
                        </p>
                    </div>
                </div>`
    const box = document.querySelector('.box');
    box.innerHTML = html;
}

function shivam() {
    Data("shivam", "Shivam", "20", "7.5", "HTML", "https://www.instagram.com/shiiivam_singh_08?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "https://www.linkedin.com/in/shivam-singh-106a782ab/", "#");
}
function ayush() {
    Data("ayush", "Ayush Gupta", "19", "5.4 +1 back", "Nothing", "https://www.instagram.com/mr_baniya_akg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "https://www.linkedin.com/in/ayush-gupta-b018222ba/", "#");
}
function vishnu() {
    Data("vishnu", "Vishnu Baghel", "19", "6.1", "Gawar hai", "https://www.instagram.com/vishnubaghel01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "https://www.linkedin.com/in/vishnu-baghel-349a98302/", "#");
}
function navedh() {
    Data("navedh", "Navedh Jain", "39", "6.5", "bhot kuch", "#", "https://www.linkedin.com/in/navedh-jain-536466304/", "#");
}
function aryan() {
    Data("aryan", "Aryan Thakur", "19", "5", "Python , C , Wordpress", "https://www.instagram.com/alonestudioss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "#", "#");
}
function tanmay() {
    Data("tanmay", "Tanmay Bhardwaj", "19", "5.1", "Ee Ka Hota Hai", "https://www.instagram.com/tanmay__bhardwaj_52/?utm_source=ig_web_button_share_sheet", "https://www.linkedin.com/in/tanmay-bhardwaj-8976b2288/", "#");
}
function arpit() {
    Data("arpit", "Arpit Kashyap", "19", "7", "C", "https://www.instagram.com/arpit_kashyap76?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "https://www.linkedin.com/in/arpit-kashyap-6bb45b303/", "#");
}

const input = document.querySelector('.input-area input');
btn.addEventListener("click" , ()=>{
    const inputVal = input.value.trim().toLowerCase();
   console.log(inputVal);
   if(inputVal=="shivam"){
    shivam();
   } else if (inputVal=="ayush gupta" || inputVal == "ayush"){
    ayush();
   } else if (inputVal=="tanmay bhardwaj" || inputVal == "tanmay"){
    tanmay();
   } else if (inputVal=="arpit kashyap" || inputVal == "arpit"){
    arpit();
   } else if (inputVal=="aryan thakur" || inputVal == "aryan"){
    aryan();
   } else if (inputVal=="navedh jain" || inputVal == "navedh"){
    navedh();
   } else if (inputVal=="vishnu baghel" || inputVal == "vishnu"){
    vishnu();
   }
   else{
    Data("#","Not Recognized");
   }
})
