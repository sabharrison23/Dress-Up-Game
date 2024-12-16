// class  
class Character {  
  constructor() {  
   this.skinColor = null;  
   this.hair = null;  
   this.shirt = null;  
   this.pants = null;  
   this.dress = null;  
   this.shoe = null;  
  }  
  
  draw() {  
   if (this.skinColor === 'pale') {  
    image(paleCharacter, 400, 80, paleCharacter.width / 2, paleCharacter.height / 2);  
   } else if (this.skinColor === 'lightSkin') {  
    image(lightSkinCharacter, 400, 80, lightSkinCharacter.width / 2, lightSkinCharacter.height / 2);  
   } else if (this.skinColor === 'black') {  
    image(blackCharacter, 400, 80, blackCharacter.width / 2, blackCharacter.height / 2);  
   } else if (this.skinColor === 'white') {  
    image(whiteCharacter, 400, 80, whiteCharacter.width / 2, whiteCharacter.height / 2);  
   } else if (this.skinColor === 'tan') {  
    image(tanCharacter, 400, 80, tanCharacter.width / 2, tanCharacter.height / 2);  
   } else if (this.skinColor === 'dark') {  
    image(darkCharacter, 400, 80, darkCharacter.width / 2, darkCharacter.height / 2);  
   }  
  
   if (this.hair === 'blueBun') {  
    image(blueBunButton, 417, -12, blueBunButton.width / 2, blueBunButton.height / 2);  
   } else if (this.hair === 'pinkHair') {  
    image(pinkHairButton, 380, 31, pinkHairButton.width / 2, pinkHairButton.height / 2);  
   } else if (this.hair === 'blondeHair') {  
    image(blondeHairButton, 410, 41, blondeHairButton.width / 2, blondeHairButton.height / 2);  
   } else if (this.hair === 'brownHair') {  
    image(brownHairButton, 379, 29, brownHairButton.width / 2, brownHairButton.height / 2);  
   }  
  
   if (this.dress === 'purpleDress') {  
    image(purpleDressButton, 432, 363, purpleDressButton.width / 2, purpleDressButton.height / 2);  
   } else if (this.dress === 'pinkMiniDress') {  
    image(pinkMiniDressButton, 476, 363, pinkMiniDressButton.width / 2, pinkMiniDressButton.height / 2);  
   } else if (this.dress === 'redDress') {  
    image(redDressButton, 370, 363, redDressButton.width / 2, redDressButton.height / 2);  
   } else {  
    if (this.shirt === 'jeanTop') {  
      image(jeanTopButton, 492, 395, jeanTopButton.width / 2, jeanTopButton.height / 2);  
    } else if (this.shirt === 'longSleeve') {  
      image(longSleeveButton, 435, 360, longSleeveButton.width / 2, longSleeveButton.height / 2);  
    } else if (this.shirt === 'pinkTop') {  
      image(pinkTopButton, 494, 363, pinkTopButton.width / 2, pinkTopButton.height / 2);  
    } else if (this.shirt === 'whiteTShirt') {  
      image(whiteTShirtButton, 458, 353, whiteTShirtButton.width / 2, whiteTShirtButton.height / 2);  
    }  
  
    if (this.pants === 'blueJeans') {  
      image(blueJeansButton, 428, 513, blueJeansButton.width / 2, blueJeansButton.height / 2);  
    } else if (this.pants === 'greenJeans') {  
      image(greenJeansButton, 427, 513, greenJeansButton.width / 2, greenJeansButton.height / 2);  
    } else if (this.pants === 'orangeSkirt') {  
      image(orangeSkirtButton, 471, 513, orangeSkirtButton.width / 2, orangeSkirtButton.height / 2);  
    } else if (this.pants === 'pinkSkirt') {  
      image(pinkSkirtButton, 471, 513, pinkSkirtButton.width / 2, pinkSkirtButton.height / 2);  
    } else if (this.pants === 'shorts') {  
      image(shortsButton, 481, 515, shortsButton.width / 2, shortsButton.height / 2);  
    } else if (this.pants === 'maxiSkirt') {  
      image(maxiSkirtButton, 438, 510, maxiSkirtButton.width / 2, maxiSkirtButton.height / 2);  
    }  
   }  
  
   if (this.shoe === 'blueSneakers') {  
    image(blueSneakersButton, 397, 950, blueSneakersButton.width / 2, blueSneakersButton.height / 2);  
   } else if (this.shoe === 'blackBoots') {  
    image(blackBootsButton, 395, 909, blackBootsButton.width / 2, blackBootsButton.height / 2);  
   } else if (this.shoe === 'brownLowTop') {  
    image(brownLowTopButton, 397, 964, brownLowTopButton.width / 2, brownLowTopButton.height / 2);  
   } else if (this.shoe === 'pinkLowTop') {  
    image(pinkLowTopButton, 397, 964, pinkLowTopButton.width / 2, pinkLowTopButton.height / 2);  
   } else if (this.shoe === 'redHeels') {  
    image(redHeelsButton, 398, 1010, redHeelsButton.width / 2, redHeelsButton.height / 2);  
   } else if (this.shoe === 'yellowTriangleShoes') {  
    image(yellowTriangleShoesButton, 387, 966, yellowTriangleShoesButton.width / 2, yellowTriangleShoesButton.height / 2);  
   } else {  
  
   }  
  }  
}  
  
let character = new Character();  
  
// Other variables  
let logo, skinColorButton, hairButton, shirtButton, pantButton, shoeButton, accessoryButton, dressButton, paleButton, paleCharacter, whiteButton, whiteCharacter, tanButton, tanCharacter, lightSkinButton, lightSkinCharacter, blackButton, blackCharacter, darkButton, darkCharacter;  
let jeanTopButton, longSleeveButton, pinkTopButton, whiteTShirtButton;  
let blueJeansButton, greenJeansButton, orangeSkirtButton, pinkSkirtButton, shortsButton, maxiSkirtButton;  
let blueBunButton, pinkHairButton, blondeHairButton, brownHairButton;  
let purpleDressButton, pinkMiniDressButton, redDressButton;  
let blueSneakersButton, blackBootsButton, brownLowTopButton, pinkLowTopButton, redHeelsButton, yellowTriangleShoesButton;  
let showSkinColors = false;  
let showHairs = false;  
let showShirts = false;  
let showPants = false;  
let showDresses = false;   
let showShoes = false;  
let skinColorButtonX;  
let skinColorButtonY;  
let skinColorButtonWidth;  
let skinColorButtonHeight;  
  
function preload() {  
   
  logo = loadImage('assets/logo.png');  
  skinColorButton = loadImage('Select/skin color 1.png');  
  hairButton = loadImage('Select/hair.png');  
  shirtButton = loadImage('Select/shirt.png');  
  pantButton = loadImage('Select/pants.png');  
  dressButton = loadImage('Select/dresses.png');  
  shoeButton = loadImage('Select/shoes.png');  
  
  paleButton = loadImage('SKIN/pale eye dropper.png');  
  paleCharacter = loadImage('SKIN/pale.png');  
  whiteButton = loadImage('SKIN/white eye dropper.png');  
  whiteCharacter = loadImage('SKIN/white.png');  
  tanButton = loadImage('SKIN/tan eye dropper.png');  
  tanCharacter = loadImage('SKIN/tan.png');  
  lightSkinButton = loadImage('SKIN/light skin eye dropper.png');  
  lightSkinCharacter = loadImage('SKIN/lightskin.png');  
  blackButton = loadImage('SKIN/black eye dropper.png');  
  blackCharacter = loadImage('SKIN/black.png');  
  darkButton = loadImage('SKIN/dark eye dropper.png');  
  darkCharacter = loadImage('SKIN/dark.png');  
  jeanTopButton = loadImage('Clothing/jean top.png');  
  longSleeveButton = loadImage('Clothing/long sleeve.png');  
  pinkTopButton = loadImage('Clothing/pink top.png');  
  whiteTShirtButton = loadImage('Clothing/white t shirt.png');  
  blueJeansButton = loadImage('Clothing/blue jeans.png');  
  greenJeansButton = loadImage('Clothing/green jeans.png');  
  orangeSkirtButton = loadImage('Clothing/orange skirt.png');  
  pinkSkirtButton = loadImage('Clothing/pink skirt.png');  
  shortsButton = loadImage('Clothing/shorts.png');  
  maxiSkirtButton = loadImage('Clothing/maxi skirt.png');  
  blueBunButton = loadImage('Clothing/blue bun.png');  
  pinkHairButton = loadImage('Clothing/pink hair.png');  
  blondeHairButton = loadImage('Clothing/blonde hair.png');  
  brownHairButton = loadImage('Clothing/brown hair.png');  
  purpleDressButton = loadImage('Clothing/purple dress.png');  
  pinkMiniDressButton = loadImage('Clothing/pink mini dress.png');  
  redDressButton = loadImage('Clothing/red dress.png');  
  
  blueSneakersButton = loadImage('Clothing/Blue sneakers.png');  
  blackBootsButton = loadImage('Clothing/black boots.png');  
  brownLowTopButton = loadImage('Clothing/brown low top.png');  
  pinkLowTopButton = loadImage('Clothing/pink low top.png');  
  redHeelsButton = loadImage('Clothing/red heels.png');  
  yellowTriangleShoesButton = loadImage('Clothing/yellow triangle shoes.png');  
}  
  
function setup() {  
  let canvas = createCanvas(1510, 1200);  
  canvas.position(0, 0);  
  canvas.style('display', 'block');  
  
  // Button positions  
  let rectX = 900;  
  let rectY = 100;  
  
  skinColorButtonX = rectX - 140;  
  skinColorButtonY = rectY;  
  skinColorButtonWidth = 120;  
  skinColorButtonHeight = 120;  
  
  hairButtonX = skinColorButtonX;  
  hairButtonY = skinColorButtonY + 120;  
  hairButtonWidth = 120;  
  hairButtonHeight = 120;  
  
  shirtButtonX = skinColorButtonX;  
  shirtButtonY = hairButtonY + 120;  
  shirtButtonWidth = 120;  
  shirtButtonHeight = 120;  
  
  pantButtonX = skinColorButtonX;  
  pantButtonY = shirtButtonY + 120;  
  pantButtonWidth = 120;  
  pantButtonHeight = 120;  
  
  shoeButtonX = skinColorButtonX;  
  shoeButtonY = pantButtonY + 120;  
  shoeButtonWidth = 120;  
  shoeButtonHeight = 120;  
  
  dressButtonX = skinColorButtonX;  
  dressButtonY = shoeButtonY + 120;  
  dressButtonWidth = 120;  
  dressButtonHeight = 120;  
}  
  
function draw() {  
  drawGradientBorder();  
  
  noStroke();  
  fill(255, 215, 255);  
  rect(50, 50, width - 100, height - 100);  
  
  image(logo, 70, 70, logo.width / 2, logo.height / 2);  
  
  let rectX = 900;  
  let rectY = 100;  
  let rectWidth = 500;  
  let rectHeight = 800;  
  let cornerRadius = 20;  
  
  noStroke();  
  fill(220, 220, 220);  
  rect(rectX + 5, rectY + 5, rectWidth, rectHeight, cornerRadius);  
  
  fill(245, 245, 220);  
  rect(rectX, rectY, rectWidth, rectHeight, cornerRadius);  
  
  stroke(200, 200, 200);  
  strokeWeight(4);  
  noFill();  
  rect(rectX + 10, rectY + 10, rectWidth - 20, rectHeight - 20, cornerRadius - 5);  
  
  let skinColorButtonX = rectX - 140;  
  let skinColorButtonY = rectY;  
  image(skinColorButton, skinColorButtonX, skinColorButtonY, 120, 120);  
  
  let hairButtonX = skinColorButtonX;  
  let hairButtonY = skinColorButtonY + 120;  
  image(hairButton, hairButtonX, hairButtonY, 120, 120);  
  
  let shirtButtonX = skinColorButtonX;  
  let shirtButtonY = hairButtonY + 120;  
  image(shirtButton, shirtButtonX, shirtButtonY, 120, 120);  
  
  let pantButtonX = skinColorButtonX;  
  let pantButtonY = shirtButtonY + 120;  
  image(pantButton, pantButtonX, pantButtonY, 120, 120);  
  
  let shoeButtonX = skinColorButtonX;  
  let shoeButtonY = pantButtonY + 120;  
  image(shoeButton, shoeButtonX, shoeButtonY, 120, 120);  
  
  let dressButtonX = skinColorButtonX;  
  let dressButtonY = shoeButtonY + 120;  
  image(dressButton, dressButtonX, dressButtonY, 120, 120);  
  
  fill(255, 255, 255);  
  rect(50, 1100, 200, 50);  
  fill(0, 0, 0);  
  textSize(24);  
  text("Save", 100, 1130);  
  
  if (showSkinColors) {  
   let paleButtonX = rectX + 40;  
   let paleButtonY = rectY + 50;  
   image(paleButton, paleButtonX, paleButtonY, 100, 100);  
  
   let lightSkinButtonX = paleButtonX;  
   let lightSkinButtonY = paleButtonY + 180;  
   image(lightSkinButton, lightSkinButtonX, lightSkinButtonY, 100, 100);  
  
   let blackButtonX = lightSkinButtonX + 170;  
   let blackButtonY = lightSkinButtonY;  
   image(blackButton, blackButtonX, blackButtonY, 100, 100);  
  
   let whiteButtonX = paleButtonX + 170;  
   let whiteButtonY = paleButtonY;  
   image(whiteButton, whiteButtonX, whiteButtonY, 100, 100);  
  
   let tanButtonX = whiteButtonX + 160;  
   let tanButtonY = whiteButtonY;  
   image(tanButton, tanButtonX, tanButtonY, 100, 100);  
  
   let darkButtonX = tanButtonX;  
   let darkButtonY = tanButtonY + 180;  
   image(darkButton, darkButtonX, darkButtonY, 100, 100);  
  
   paleButton.pos = { x: paleButtonX, y: paleButtonY, w: 100, h: 100 };  
   lightSkinButton.pos = { x: lightSkinButtonX, y: lightSkinButtonY, w: 100, h: 100 };  
   blackButton.pos = { x: blackButtonX, y: blackButtonY, w: 100, h: 100 };  
   whiteButton.pos = { x: whiteButtonX, y: whiteButtonY, w: 100, h: 100 };  
   tanButton.pos = { x: tanButtonX, y: tanButtonY, w: 100, h: 100 };  
   darkButton.pos = { x: darkButtonX, y: darkButtonY, w: 100, h: 100 };  
  }  
  
  if (showHairs) {  
   let blueBunButtonX = rectX + 50;  
   let blueBunButtonY = rectY + 50;  
   image(blueBunButton, blueBunButtonX, blueBunButtonY, 120, 120);  
  
   let pinkHairButtonX = blueBunButtonX + 150;  
   let pinkHairButtonY = blueBunButtonY;  
   image(pinkHairButton, pinkHairButtonX, pinkHairButtonY, 120, 120);  
  
   let blondeHairButtonX = blueBunButtonX;  
   let blondeHairButtonY = blueBunButtonY + 150;  
   image(blondeHairButton, blondeHairButtonX, blondeHairButtonY, 120, 120);  
  
   let brownHairButtonX = blondeHairButtonX + 150;  
   let brownHairButtonY = blondeHairButtonY;  
   image(brownHairButton, brownHairButtonX, brownHairButtonY, 120, 120);  
  
   blueBunButton.pos = { x: blueBunButtonX, y: blueBunButtonY, w: 120, h: 120 };  
   pinkHairButton.pos = { x: pinkHairButtonX, y: pinkHairButtonY, w: 120, h: 120 };  
   blondeHairButton.pos = { x: blondeHairButtonX, y: blondeHairButtonY, w: 120, h: 120 };  
   brownHairButton.pos = { x: brownHairButtonX, y: brownHairButtonY, w: 120, h: 120 };  
  }  
  
  if (showShirts) {  
   let jeanTopButtonX = rectX + 50;  
   let jeanTopButtonY = rectY + 50;  
   image(jeanTopButton, jeanTopButtonX, jeanTopButtonY, 120, 120);  
  
   let longSleeveButtonX = jeanTopButtonX + 150;  
   let longSleeveButtonY = jeanTopButtonY;  
   image(longSleeveButton, longSleeveButtonX, longSleeveButtonY, 120, 120);  
  
   let pinkTopButtonX = jeanTopButtonX;  
   let pinkTopButtonY = jeanTopButtonY + 150;  
   image(pinkTopButton, pinkTopButtonX, pinkTopButtonY, 120, 120);  
  
   let whiteTShirtButtonX = pinkTopButtonX + 150;  
   let whiteTShirtButtonY = pinkTopButtonY;  
   image(whiteTShirtButton, whiteTShirtButtonX, whiteTShirtButtonY, 120, 120);  
  
   jeanTopButton.pos = { x: jeanTopButtonX, y: jeanTopButtonY, w: 120, h: 120 };  
   longSleeveButton.pos = { x: longSleeveButtonX, y: longSleeveButtonY, w: 120, h: 120 };  
   pinkTopButton.pos = { x: pinkTopButtonX, y: pinkTopButtonY, w: 120, h: 120 };  
   whiteTShirtButton.pos = { x: whiteTShirtButtonX, y: whiteTShirtButtonY, w: 120, h: 120 };  
  }  
  
  if (showPants) {  
   let blueJeansButtonX = rectX + 50;  
   let blueJeansButtonY = rectY + 50;  
   image(blueJeansButton, blueJeansButtonX, blueJeansButtonY, 120, 120);  
  
   let greenJeansButtonX = blueJeansButtonX + 150;  
   let greenJeansButtonY = blueJeansButtonY;  
   image(greenJeansButton, greenJeansButtonX, greenJeansButtonY, 120, 120);  
  
   let orangeSkirtButtonX = blueJeansButtonX;  
   let orangeSkirtButtonY = blueJeansButtonY + 150;  
   image(orangeSkirtButton, orangeSkirtButtonX, orangeSkirtButtonY, 120, 120);  
  
   let pinkSkirtButtonX = orangeSkirtButtonX + 150;  
   let pinkSkirtButtonY = orangeSkirtButtonY;  
   image(pinkSkirtButton, pinkSkirtButtonX, pinkSkirtButtonY, 120, 120);  
  
   let shortsButtonX = orangeSkirtButtonX;  
   let shortsButtonY = orangeSkirtButtonY + 150;  
   image(shortsButton, shortsButtonX, shortsButtonY, 120, 120);  
  
   let maxiSkirtButtonX = shortsButtonX + 150;  
   let maxiSkirtButtonY = shortsButtonY;  
   image(maxiSkirtButton, maxiSkirtButtonX, maxiSkirtButtonY, 120, 120);  
  
   blueJeansButton.pos = { x: blueJeansButtonX, y: blueJeansButtonY, w: 120, h: 120 };  
   greenJeansButton.pos = { x: greenJeansButtonX, y: greenJeansButtonY, w: 120, h: 120 };  
   orangeSkirtButton.pos = { x: orangeSkirtButtonX, y: orangeSkirtButtonY, w: 120, h: 120 };  
   pinkSkirtButton.pos = { x: pinkSkirtButtonX, y: pinkSkirtButtonY, w: 120, h: 120 };  
   shortsButton.pos = { x: shortsButtonX, y: shortsButtonY, w: 120, h: 120 };  
   maxiSkirtButton.pos = { x: maxiSkirtButtonX, y: maxiSkirtButtonY, w: 120, h: 120 };  
  }  
  
  if (showShoes) {  
   let blueSneakersButtonX = rectX + 50;  
   let blueSneakersButtonY = rectY + 50;  
   image(blueSneakersButton, blueSneakersButtonX, blueSneakersButtonY, 120, 120);  
  
   let blackBootsButtonX = blueSneakersButtonX + 150;  
   let blackBootsButtonY = blueSneakersButtonY;  
   image(blackBootsButton, blackBootsButtonX, blackBootsButtonY, 120, 120);  
  
   let brownLowTopButtonX = blueSneakersButtonX;  
   let brownLowTopButtonY = blueSneakersButtonY + 150;  
   image(brownLowTopButton, brownLowTopButtonX, brownLowTopButtonY, 120, 120);  
  
   let pinkLowTopButtonX = brownLowTopButtonX + 150;  
   let pinkLowTopButtonY = brownLowTopButtonY;  
   image(pinkLowTopButton, pinkLowTopButtonX, pinkLowTopButtonY, 120, 120);  
  
   let redHeelsButtonX = blueSneakersButtonX;  
   let redHeelsButtonY = brownLowTopButtonY + 150;  
   image(redHeelsButton, redHeelsButtonX, redHeelsButtonY, 120, 120);  
  
   let yellowTriangleShoesButtonX = redHeelsButtonX + 150;  
   let yellowTriangleShoesButtonY = redHeelsButtonY;  
   image(yellowTriangleShoesButton, yellowTriangleShoesButtonX, yellowTriangleShoesButtonY, 120, 120);  
  
   blueSneakersButton.pos = { x: blueSneakersButtonX, y: blueSneakersButtonY, w: 120, h: 120 };  
   blackBootsButton.pos = { x: blackBootsButtonX, y: blackBootsButtonY, w: 120, h: 120 };  
   brownLowTopButton.pos = { x: brownLowTopButtonX, y: brownLowTopButtonY, w: 120, h: 120 };  
   pinkLowTopButton.pos = { x: pinkLowTopButtonX, y: pinkLowTopButtonY, w: 120, h: 120 };  
   redHeelsButton.pos = { x: redHeelsButtonX, y: redHeelsButtonY, w: 120, h: 120 };  
   yellowTriangleShoesButton.pos = { x: yellowTriangleShoesButtonX, y: yellowTriangleShoesButtonY, w: 120, h: 120 };  
  }  
  
  if (showDresses) {  
   let purpleDressButtonX = rectX + 50;  
   let purpleDressButtonY = rectY + 50;  
   image(purpleDressButton, purpleDressButtonX, purpleDressButtonY, 120, 120);  
  
   let pinkMiniDressButtonX = purpleDressButtonX + 150;  
   let pinkMiniDressButtonY = purpleDressButtonY;  
   image(pinkMiniDressButton, pinkMiniDressButtonX, pinkMiniDressButtonY, 120, 120);  
  
   let redDressButtonX = purpleDressButtonX;  
   let redDressButtonY = purpleDressButtonY + 150;  
   image(redDressButton, redDressButtonX, redDressButtonY, 120, 120);  
  
   purpleDressButton.pos = { x: purpleDressButtonX, y: purpleDressButtonY, w: 120, h: 120 };  
   pinkMiniDressButton.pos = { x: pinkMiniDressButtonX, y: pinkMiniDressButtonY, w: 120, h: 120 };  
   redDressButton.pos = { x: redDressButtonX, y: redDressButtonY, w: 120, h: 120 };  
  }  
  
  character.draw();  
}  
  
function drawGradientBorder() {  
  let gradient = drawingContext.createLinearGradient(0, 0, width, height);  
  gradient.addColorStop(0, 'pink');  
  gradient.addColorStop(1, 'purple');  
  drawingContext.fillStyle = gradient;  
  noStroke();  
  rect(0, 0, width, height);  
}  
  
function mousePressed() {  
  // "Skin Color" button  
  if (mouseX > skinColorButtonX && mouseX < skinColorButtonX + skinColorButtonWidth && mouseY > skinColorButtonY && mouseY < skinColorButtonY + skinColorButtonHeight) {  
   showSkinColors = !showSkinColors;  
   showHairs = false;  
   showShirts = false;  
   showPants = false;  
   showDresses = false;  
   showShoes = false;  
   return;  
  }  
  
  //"Hair" button  
  let hairButtonX = skinColorButtonX;  
  let hairButtonY = skinColorButtonY + 120;  
  let hairButtonWidth = 120;  
  let hairButtonHeight = 120;  
  if (mouseX > hairButtonX && mouseX < hairButtonX + hairButtonWidth && mouseY > hairButtonY && mouseY < hairButtonY + hairButtonHeight) {  
   showHairs = !showHairs;  
   showSkinColors = false;  
   showShirts = false;  
   showPants = false;  
   showDresses = false;  
   showShoes = false;  
   return;  
  }  
  
  //"Shirt" button  
  let shirtButtonX = skinColorButtonX;  
  let shirtButtonY = hairButtonY + 120;  
  let shirtButtonWidth = 120;  
  let shirtButtonHeight = 120;  
  if (mouseX > shirtButtonX && mouseX < shirtButtonX + shirtButtonWidth && mouseY > shirtButtonY && mouseY < shirtButtonY + shirtButtonHeight) {  
   showShirts = !showShirts;  
   showSkinColors = false;  
   showHairs = false;  
   showPants = false;  
   showDresses = false;  
   showShoes = false;  
   return;  
  }  
  
  // "Pant" button  
  let pantButtonX = skinColorButtonX;  
  let pantButtonY = shirtButtonY + 120;  
  let pantButtonWidth = 120;  
  let pantButtonHeight = 120;  
  if (mouseX > pantButtonX && mouseX < pantButtonX + pantButtonWidth && mouseY > pantButtonY && mouseY < pantButtonY + pantButtonHeight) {  
   showPants = !showPants;  
   showSkinColors = false;  
   showHairs = false;  
   showShirts = false;  
   showDresses = false;  
   showShoes = false;  
   return;  
  }  
  
  // "Shoe" button  
  let shoeButtonX = skinColorButtonX;  
  let shoeButtonY = pantButtonY + 120;  
  let shoeButtonWidth = 120;  
  let shoeButtonHeight = 120;  
  if (mouseX > shoeButtonX && mouseX < shoeButtonX + shoeButtonWidth && mouseY > shoeButtonY && mouseY < shoeButtonY + shoeButtonHeight) {  
   showShoes = !showShoes;  
   showSkinColors = false;  
   showHairs = false;  
   showShirts = false;  
   showPants = false;  
   showDresses = false;  
   return;  
  }  
  
  //"Dress" button  
  let dressButtonX = skinColorButtonX;  
  let dressButtonY = shoeButtonY + 120;  
  let dressButtonWidth = 120;  
  let dressButtonHeight = 120;  
  if (mouseX > dressButtonX && mouseX < dressButtonX + dressButtonWidth && mouseY > dressButtonY && mouseY < dressButtonY + dressButtonHeight) {  
   showDresses = !showDresses;  
   showSkinColors = false;  
   showHairs = false;  
   showShirts = false;  
   showPants = false;  
   showShoes = false;  
   return;  
  }  
  
  // "Save" button  
  if (mouseX > 50 && mouseX < 250 && mouseY > 1100 && mouseY < 1150) {  
   saveCanvas('myCharacter', 'png');  
   return;  
  }  
  
  if (showSkinColors) {  
   if (isButtonClicked(paleButton.pos)) {  
    character.skinColor = 'pale';  
   } else if (isButtonClicked(lightSkinButton.pos)) {  
    character.skinColor = 'lightSkin';  
   } else if (isButtonClicked(blackButton.pos)) {  
    character.skinColor = 'black';  
   } else if (isButtonClicked(whiteButton.pos)) {  
    character.skinColor = 'white';  
   } else if (isButtonClicked(tanButton.pos)) {  
    character.skinColor = 'tan';  
   } else if (isButtonClicked(darkButton.pos)) {  
    character.skinColor = 'dark';  
   }  
  }  
  
  if (showHairs) {  
   if (isButtonClicked(blueBunButton.pos)) {  
    character.hair = 'blueBun';  
   } else if (isButtonClicked(pinkHairButton.pos)) {  
    character.hair = 'pinkHair';  
   } else if (isButtonClicked(blondeHairButton.pos)) {  
    character.hair = 'blondeHair';  
   } else if (isButtonClicked(brownHairButton.pos)) {  
    character.hair = 'brownHair';  
   }  
  }  
  
  if (showShirts) {  
   if (isButtonClicked(jeanTopButton.pos)) {  
    character.shirt = 'jeanTop';  
   } else if (isButtonClicked(longSleeveButton.pos)) {  
    character.shirt = 'longSleeve';  
   } else if (isButtonClicked(pinkTopButton.pos)) {  
    character.shirt = 'pinkTop';  
   } else if (isButtonClicked(whiteTShirtButton.pos)) {  
    character.shirt = 'whiteTShirt';  
   }  
  }  
  
  if (showPants) {  
   if (isButtonClicked(blueJeansButton.pos)) {  
    character.pants = 'blueJeans';  
   } else if (isButtonClicked(greenJeansButton.pos)) {  
    character.pants = 'greenJeans';  
   } else if (isButtonClicked(orangeSkirtButton.pos)) {  
    character.pants = 'orangeSkirt';  
   } else if (isButtonClicked(pinkSkirtButton.pos)) {  
    character.pants = 'pinkSkirt';  
   } else if (isButtonClicked(shortsButton.pos)) {  
    character.pants = 'shorts';  
   } else if (isButtonClicked(maxiSkirtButton.pos)) {  
    character.pants = 'maxiSkirt';  
   }  
  }  
  
  if (showDresses) {  
   if (isButtonClicked(purpleDressButton.pos)) {  
    character.dress = 'purpleDress';  
    character.shirt = null;  
    character.pants = null;  
   } else if (isButtonClicked(pinkMiniDressButton.pos)) {  
    character.dress = 'pinkMiniDress';  
    character.shirt = null;  
    character.pants = null;  
   } else if (isButtonClicked(redDressButton.pos)) {  
    character.dress = 'redDress';  
    character.shirt = null;  
    character.pants = null;  
   }  
  }  
  
  if (showShoes) {  
   if (isButtonClicked(blueSneakersButton.pos)) {  
    character.shoe = 'blueSneakers';  
   } else if (isButtonClicked(blackBootsButton.pos)) {  
    character.shoe = 'blackBoots';  
   } else if (isButtonClicked(brownLowTopButton.pos)) {  
    character.shoe = 'brownLowTop';  
   } else if (isButtonClicked(pinkLowTopButton.pos)) {  
    character.shoe = 'pinkLowTop';  
   } else if (isButtonClicked(redHeelsButton.pos)) {  
    character.shoe = 'redHeels';  
   } else if (isButtonClicked(yellowTriangleShoesButton.pos)) {  
    character.shoe = 'yellowTriangleShoes';  
   }  
  }  
}  
  
function isButtonClicked(buttonPos) {  
  return (mouseX > buttonPos.x && mouseX < buttonPos.x + buttonPos.w && mouseY > buttonPos.y && mouseY < buttonPos.y + buttonPos.h);  
}
