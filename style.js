//BEGGINING
//CANVAS SETUP
var cnv = document.getElementById("myCanvas");
var info = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;


//Base
info.fillStyle = "white";
info.fillRect(0, 0, 800, 800);


//FACING OUTWARDS/ TOWARDS THE SCREEEN NUMERICALLY


//Snow 1
info.fillStyle = "white";
info.fillRect(0, 400, 1000, 600);


//Sky 1
info.fillStyle = " lightblue";
info.fillRect(0, 0, 1000, 650);


//TRIANGLES right to left


//triangle 1
info.fillStyle = "grey";
info.beginPath();
info.moveTo(0, 300);
info.lineTo(0, 650);
info.lineTo(400, 650);
info.lineTo(0, 300);
info.fill();


//triangle 2
info.beginPath();
info.fillStyle = "grey";
info.moveTo(1000, 550);
info.lineTo(1000, 650);
info.lineTo(400, 650);
info.lineTo(1000, 550);
info.fill();


//mountainshade;
info.beginPath();
info.fillStyle = "rgb(178,172,172";
info.fillRect(0, 650, 1000, 25);


//house base
info.fillStyle = "rgb(153,76,0";
info.fillRect(600, 600, 250, 200);

//house door
info.fillStyle = "rgb(153,76,0";
info.fillRect(600, 600, 250, 200);


//house window
info.fillStyle = "yellow";
info.fillRect(760, 670, 50, 50);

//housedoor
info.fillStyle = "rgb(102,51,0";
info.fillRect(632, 670, 40, 130);

//house roof
info.beginPath();
info.fillStyle = "rgb(102,51,0";
info.moveTo(700, 550);
info.lineTo(850, 600);
info.lineTo(600, 600);
info.lineTo(600, 550);
info.fill();


//house post 1 (left)
info.fillStye = "rgb(102,51,0";
info.fillStyle = info.fillRect(600, 550, 25, 250);


//house posts 2 (right)
info.fillStye = "rgb(102,51,0";
info.fillStyle = info.fillRect(680, 560, 25, 240);


// //tiles

//TILE 1
info.fillStyle = "grey";
info.fillRect(540, 820, 120, 60);
//Shade of 1
info.fillStyle = "darkgrey";
info.fillRect(540, 820, 120, 10);

//TILE 2
info.fillStyle = "grey";
info.fillRect(370, 880, 100, 40);
//Shade of 2
info.fillStyle = "darkgrey";
info.fillRect(370, 880, 100, 10);

//TILE 3
info.fillStyle = "grey";
info.fillRect(620, 935, 100, 40);
//Shade of 3
info.fillStyle = "darkgrey";
info.fillRect(620, 935, 100, 10);



//house window line 1
info.strokeStyle = "black"
info.lineWidth = 3;
info.beginPath();
info.moveTo(785, 670);
info.lineTo(785, 720);
info.stroke();

//house window line 2
info.strokeStyle = "black"
info.lineWidth = 3;
info.beginPath();
info.moveTo(760, 695);
info.lineTo(810, 695);
info.stroke();

//house outline
info.strokeStyle = "rgb(102,51,0"
info.lineWidth = 6;
info.beginPath();
info.moveTo(760, 670);
info.lineTo(810, 670);
info.stroke();

info.strokeStyle = "rgb(102,51,0"
info.lineWidth = 6;
info.beginPath();
info.moveTo(760, 720);
info.lineTo(810, 720);
info.stroke();

info.strokeStyle = "rgb(102,51,0"
info.lineWidth = 6;
info.beginPath();
info.moveTo(760, 670);
info.lineTo(760, 720);
info.stroke();

//house window line 1
info.strokeStyle = "rgb(102,51,0"
info.lineWidth = 6;
info.beginPath();
info.moveTo(810, 670);
info.lineTo(810, 720);
info.stroke();

// clouds
info.fillStyle = "white";
info.fillRect(100, 250, 200, 100);
//shade cloud
info.fillStyle = "lightgrey";
info.fillRect(100, 330, 200, 40);

info.fillStyle = "white";
info.fillRect(600, 25, 300, 200);
//shade cloud
info.fillStyle = "lightgrey";
info.fillRect(600, 175, 300, 50);

info.fillStyle = "white";
info.fillRect(550, 300, 300, 100);
//shadecloud
info.fillStyle = "lightgrey";
info.fillRect(550, 400, 300, 50);

info.fillStyle = "white";
info.fillRect(300, 500, 200, 50);
//shadecloud
info.fillStyle = "lightgrey";
info.fillRect(300, 530, 200, 20);

//Sun
info.fillStyle = "yellow";
info.beginPath();
//contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
info.arc(290, 120, 100, 0, 2 * Math.PI);
info.fill();

//doorknob
info.fillStyle = "yellow";
info.beginPath();
//contxt.arc(xPos, yPos, Radius, startAngle, endAngle);
info.arc(645, 740, 5, 0, 2 * Math.PI);
info.fill();

