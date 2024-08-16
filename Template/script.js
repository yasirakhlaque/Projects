const container = document.querySelector('.container');

function add(thumbnail, time, title, ChName, views, months) {
    let html = ` <div class="card">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="img">
                <div class="time">
                    ${time}
                </div>
            </div>
            <div class="info">
                <h4 class="title">${title}</h4>
                <div class="details">
                    <ul>
                        <li class="ChName">${ChName}</li>
                        <li class="views">${views}</li>
                        <li class="months">${months} months ago</li>
                    </ul>
                </div>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', html);
}

let btn = document.querySelector('button');
btn.addEventListener("click", function () {
    let thumb = prompt("Enter The Thumbnail link");
    let time = prompt("Enter video length");
    let title = prompt("Enter The title of Video");
    let ChName = prompt("Enter The Channel Name");
    let views = prompt("Enter The Number of Views");
    let months = prompt("Enter upload time");
    add(thumb, time, title, ChName, views, months);
});