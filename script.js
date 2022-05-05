'use strict'

console.log('hello world');

const picContainerElement = document.getElementById
('centerContent');
const firstpicElement = document.getElementById
('pic1');
const secondpicElement = document.getElementById
('pic2');
const thirdpicElement= document.getElementById
('pic3')
const firstPicTitle = document.getElementById 
('img1title');
const secondPicTitle = document.getElementById
('img2title');
const thirdPicTitle = document.getElementById
('img3title')

let count = 0

let pic1 = null;
let pic2 = null;
let pic3 = null;

function Image(name, imgPath,) {
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
}

Image.allImages = [];

Image.prototype.renderImage = function(img, h2){
    img.src = this.imgPath;
    h2.textContent = this.name;
    this.views++;
}

Image.allImages.push(new Image('Bag', './images/bag.jpg'));

Image.allImages.push(new Image('Banana', './images/banana.jpg'));

Image.allImages.push(new Image('Bathroom', './images/bathroom.jpg'));

Image.allImages.push(new Image('Boots', './images/boots.jpg'));

Image.allImages.push(new Image('Breakfast', './images/breakfast.jpg'));

Image.allImages.push(new Image('Bubblegum', './images/bubblegum.jpg'));

Image.allImages.push(new Image('Chair', './images/chair.jpg'));

Image.allImages.push(new Image('Cthulhu', './images/cthulhu.jpg'));

Image.allImages.push(new Image('Dog-Duck', './images/dog-duck.jpg'));

Image.allImages.push(new Image('Dragon-Meat', './images/dragon.jpg'));

Image.allImages.push(new Image('Pen', './images/pen.jpg'));

Image.allImages.push(new Image('Pet-sweep', './images/pet-sweep.jpg'));

Image.allImages.push(new Image('Scissors', './images/scissors.jpg'));

Image.allImages.push(new Image('Shark', './images/shark.jpg'));

Image.allImages.push(new Image('Sweep', './images/sweep.png'));

Image.allImages.push(new Image('Tauntaun', './images/tauntaun.jpg'));

Image.allImages.push(new Image('Unicorn-Meat', './images/unicorn.jpg'));

Image.allImages.push(new Image('Water-Can', './images/water-can.jpg'));

Image.allImages.push(new Image('Wine-Glass', './images/wine-glass.jpg'));

function changethreeimages() {
const cantUse = [pic1, pic2, pic3];
if(cantUse.includes(pic1)){
    let picOne = Math.floor(Math.random() * Image.allImages.length);
    pic1 =Image.allImages[picOne];
}
cantUse.push[[pic1]]
if(cantUse.includes(pic2)){
let picTwo = Math.floor(Math.random() * Image.allImages.length);
pic2 = Image.allImages[picTwo]
}
cantUse.push[[pic2]]
if(cantUse.includes(pic3)){
    let picThree = Math.floor(Math.random() * Image.allImages.length);
    pic3 = Image.allImages[picThree]
    }
    cantUse.push[[pic3]]
}

function renderImage() {
    pic1.renderImage(firstpicElement, firstPicTitle);
    pic2.renderImage(secondpicElement, secondPicTitle);
    pic3.renderImage(thirdpicElement, thirdPicTitle);
}

function putImagesInStorage() {
    let stringify = JSON.stringify(Image.allImages);
    if (stringify = []){
        localStorage.setItem('image', stringArray);
    }
    else (localStorage.setItem('image', stringArray))
}

function getImagesFromStorage() {
let storedImage = localStorage.getItem('image');
if(storedImage){
    let newImage = JSON.parse(storedImage);
    for(let image of newImage){
        let myNewImage = new Image(image.name, image.imgPath, image.clicks, image.view);
    }
}    
}

function clickImage(e) {
    let imageClicked = e.target.id;
    if(imageClicked === 'pic1' || imageClicked === 'pic2' || imageClicked === 'pic3'){
        count++;
    }
    if(imageClicked === 'pic1'){
        pic1.clicks++;
    }
    if(imageClicked === 'pic2'){
        pic2.clicks++;
    }
    if(imageClicked === 'pic3'){
        pic3.clicks++;
    }
    if (count ===5){
        for(let img of Image.allImages){
            console.log(img.name + "Was Clicked on" + img.clicks + " Was viewed " + img.views)
        }
    }


 getImagesFromStorage();
 changethreeimages();
renderImage();
    }

 picContainerElement.addEventListener('click', clickImage );

 getImagesFromStorage();
 changethreeimages();
renderImage();

