const lev = document.getElementById("lev");

let clickedOnce = false;
lev.addEventListener("click", function onClick(event) {
    if(clickedOnce) {
        event.target.style.color = "white";
        event.target.style.backgroundColor = "blue";
        clickedOnce = false;
    } else {
        event.target.style.color = "white";
        event.target.style.backgroundColor = "red";
        clickedOnce = true;
    }
});

const popes = document.querySelector("#popes");

popes.addEventListener("click", function onClick(event) {
    if(clickedOnce) {
        event.target.style.color = "black";
        event.target.style.backgroundColor = "yellow";
        clickedOnce = false;
    } else {
        event.target.style.color = "white";
        event.target.style.backgroundColor = "green";
        clickedOnce = true;
    }
});

function icnreaseImage() {
    let image = document.getElementById("image");
    image.height = (parseInt(image.height) + 50).toString();
    image.width = (parseInt(image.width) + 50).toString();
}

function decreaseImage() {
    let image = document.getElementById("image");
    image.height = (parseInt(image.height) - 50).toString();
    image.width = (parseInt(image.width) - 50).toString();
}

function addImage() {
    var newImage = document.createElement('img');
    newImage.src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Valencia-1.jpg";
    newImage.style.width = "400px";
    newImage.alt = "Valencia Image";
    newImage.id = "image";
    document.getElementById("image_box").appendChild(newImage);
}

function deleteImage() {
    let images = document.querySelectorAll("#image");
    let lastImage = images[images.length - 1];
    lastImage.parentNode.removeChild(lastImage);
}