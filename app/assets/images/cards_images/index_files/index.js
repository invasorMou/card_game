  //global variables
  colors = ["yellow", "blue", "red", "green"];
  offset = 25;
  yposition =50;
  xposition = 50;
  maxCol = 10;
  scoreboard = 10;
  buttons = 4;
  bubblesGrid = []

  //funtionc to generate a random color
  function randomColor(){
  randomNumber = Math.floor(Math.random()*colors.length)
  return colors[randomNumber]
  }
  //class for the game
  class Game {

  }
  //class for the grid
  class Grid {

    constructor(){
      this.rows = [];
      this.bubbleRows= [] //all the rows that are filled with bubbles
      this.grid = document.getElementById("grid");
    }  

    createRows(){
      for(var y=0; y<9; y++){  
        var divrow = document.createElement("div");
        divrow.classList.add("rows","n-"+y);
        this.rows.push(divrow);
        this.grid.appendChild(divrow);
      }
    }

    fillTopRow(){
      var bubbles = [];
      for(var n=0; n<10; n++){
        var vary = 0
        if(g.bubbleRows.length%2){
          var varx = (n*xposition)+(xposition/2);
        } else {
          var varx = (n*xposition)
        }
        var newBubble = new Bubble(vary,varx);
        bubbles.push(newBubble);
        this.rows[0].appendChild(newBubble.body);

        }
      this.bubbleRows.push(bubbles);
    }

    moveBubbleRows(){
      for(var n=9; n>0; n--){
        var bubblesInRow = $('.n-'+(n-1)+' .bubble');
        $('.n-'+n).append(bubblesInRow);
      }
      g.fillTopRow();
    }
  }
  //clasd for the cannon
  class Cannon {

    constructor(){
      this.cannon = document.getElementById("cannon");
      this.bullets = []
    }

    loadBubble(){
      var bullet = new Bubble(400,238);
      this.bullets.push(bullet);
      g.grid.appendChild(bullet.body);
    }

    shootBubble(e){
      var xPosition = e.clientX-100;
      var yPosition = e.clientY-12;
      var coords = "X coords: " + xPosition + ", Y coords: " + yPosition;
      var finalYPosition = (yPosition-25);
      var finalXPosition = (xPosition-25);
      var bullet = c.bullets[0];
      var initPositionY = 400;
      var initPositionX = 238;
      bullet.body.style.left = finalXPosition+'px';
      bullet.body.style.top = finalYPosition+'px';

      // var id = setInterval(frame, 0.1);
      // function frame(){
      //   if(initPositionY == (initPositionY+999)){
      //     clearInterval(id);
      //   } else {
      //     initPositionY--;
      //     bullet.body.style.top = initPositionY+'px';
      //   }
      //   if(initPositionX>finalXPosition){
      //     initPositionX = initPositionX + 5;
      //     finalXPosition--;
      //     // initPositionY--;
      //     bullet.body.style.left = initPositionX+'px';
      //     // bullet.body.style.top = initPositionY+'px';
      //   } else if(initPositionX<finalXPosition){
      //     initPositionX = initPositionX + 5;
      //     finalXPosition++;
      //     // initPositionY--;
      //     bullet.body.style.left = initPositionX+'px';
      //     // bullet.body.style.top = initPositionY+'px';
      //   }
      // }
      console.log(coords);
    }
  }
  
  //class for the bubble
  class Bubble {
    
    constructor(ycoord,xcoord){
      this.ycoord = ycoord;
      this.xcoord = xcoord;
      this.color = randomColor();
      this.body = document.createElement('div')
      this.body.classList.add("bubble")
      this.body.style.backgroundColor = this.color;
      this.body.style.top = this.ycoord+"px";
      this.body.style.left = this.xcoord+"px";
    }
  } 

//stuffs that load when the page is ready
$(document).ready(function(){



g = new Grid(); // creating the grid
g.createRows(); //creating the rows inside the grid
g.fillTopRow(); // filling the first row with bubbles
c = new Cannon(); //creatin the cannon
c.loadBubble(); // charching the cannon with a bubble
g.grid.addEventListener("click",c.shootBubble, false); // to see where the mouse is


});
  
//     constructor(row, col, xcor, ycor) {
//       this.color = randomColor();
//       this.position = [row,col];
//       this.row = row;
//       this.col = col;
//       this.xcor = xcor;
//       this.ycor = ycor
//     }
    
//     neighbors(){
//       if(this.row%2==0){
//         var numberneighbors=0;
//         //rows with offset
//         var colorAtPos1 = bubblesGrid[this.row-2][this.col-1].color;
//         var colorAtPos2 = bubblesGrid[this.row-1][this.col-2].color;
//         var colorAtPos3 = bubblesGrid[this.row][this.col-1].color;
//         var colorAtPos4 = bubblesGrid[this.row-2][this.col].color;
//         var colorAtPos5 = bubblesGrid[this.row-1][this.col].color;
//         var colorAtPos6 = bubblesGrid[this.row][this.col].color;
//         console.log(colorAtPos1,colorAtPos2,colorAtPos3,colorAtPos4,colorAtPos5,colorAtPos6);
//       } else {
//         //rows without offset
//         var colorAtPos1 = bubblesGrid[this.row-2][this.col-2].color;
//         var colorAtPos2 = bubblesGrid[this.row-1][this.col-2].color;
//         var colorAtPos3 = bubblesGrid[this.row][this.col-2].color;
//         var colorAtPos4 = bubblesGrid[this.row-2][this.col-1].color;
//         var colorAtPos5 = bubblesGrid[this.row-1][this.col].color;
//         var colorAtPos6 = bubblesGrid[this.row][this.col-1].color;
//         console.log(colorAtPos1,colorAtPos2,colorAtPos3,colorAtPos4,colorAtPos5,colorAtPos6);
//       }
//     }
//   }

// <div class="rows n-0"></div>
//           <div class="rows n-1"></div>
// for(var y=0; y<1;y++){
//           var divrow = document.createElement("div");
//           $(divrow).addClass("row-"+y).addClass('rows');
//           var bubbleRow = [];
//           for (var x=0; x<maxCol; x++){
//             yalign = ((y)*yposition);
            
//             xalign = ((x-1)*xposition);
            
//             var bubble = new Bubble(y,x,xalign,yalign);
//             bubbleRow.push(bubble);
            
//             var color = bubble["color"];
            
//             var tile = document.createElement("div");
//             $(tile).addClass('tile').addClass("col"+x)
//             tile.style.backgroundColor = color;
            
//             tile.style.top = yalign+"px";
            
//             if ((y) % 2){
//               tile.style.left = xalign+offset+"px";
//             }
//             else{
//               tile.style.left = xalign+"px";  
//             }
//             divrow.appendChild(tile);
//           }
//           $("#grid").prepend(divrow);
//           bubblesGrid.push(bubbleRow)
//       }
//     });




class Scoreboard {

}







  


  

  


//   
  
//   var divscoreboard = document.createElement("div");
//   $(divscoreboard).addClass('scoreboard')
//   $(divscoreboard).text("Score: " + scoreboard)
  
//   var divbuttons = document.createElement("div");
//   $(divbuttons).addClass('div_buttons')
  
//   var startbutton = document.createElement("button");
//   startbutton.textContent="START";
//   startbutton.id = "startbutton";
//   var stopbutton = document.createElement("button");
//   stopbutton.textContent="STOP";
//   stopbutton.id = "stopbutton";
  
  
//   //$("#grid").append(divscoreboard);
//   $(divbuttons).append(startbutton);
//   $(divbuttons).append(stopbutton);
//   $("#grid").append(divbuttons);
   
    
//     $(startbutton).on('click', function(){
      
//       for(var y=0; y<1;y++){
//           var divrow = document.createElement("div");
//           $(divrow).addClass("row-"+y).addClass('rows');
//           var bubbleRow = [];
//           for (var x=0; x<maxCol; x++){
//             yalign = ((y)*yposition);
            
//             xalign = ((x-1)*xposition);
            
//             var bubble = new Bubble(y,x,xalign,yalign);
//             bubbleRow.push(bubble);
            
//             var color = bubble["color"];
  	        
//             var tile = document.createElement("div");
//             $(tile).addClass('tile').addClass("col"+x)
//             tile.style.backgroundColor = color;
            
//             tile.style.top = yalign+"px";
            
//             if ((y) % 2){
//               tile.style.left = xalign+offset+"px";
//             }
//             else{
//               tile.style.left = xalign+"px";  
//             }
//             divrow.appendChild(tile);
//           }
//           $("#grid").prepend(divrow);
//           bubblesGrid.push(bubbleRow)
//       }
//     });
    
    
//           y=0
//     $(stopbutton).on('click', function(){
          
//           $(".rows").css('top', (yposition*(y)) +'px');
          
//           var divrow = document.createElement("div");
//           $(divrow).addClass("row-"+y).addClass('rows');
//           var bubbleRow = [];
//           for (var x=0; x<maxCol; x++){
//             yalign = ((y)*yposition);
            
//             xalign = ((x-1)*xposition);
            
//             var bubble = new Bubble(y,x,xalign,yalign);
//             bubbleRow.push(bubble);
            
//             var color = bubble["color"];
  	        
//             var tile = document.createElement("div");
//             $(tile).addClass('tile').addClass("col"+x)
//             tile.style.backgroundColor = color;
            
//             tile.style.top = yalign+"px";
            
//             if ((y) % 2 == 0){
//               tile.style.left = xalign+offset+"px";
//             }
//             else{
//               tile.style.left = xalign+"px";  
//             }
//             divrow.appendChild(tile);
//           }
//           $("#grid").prepend(divrow);
//           bubblesGrid.push(bubbleRow)
          
//           y++
  
//     });


//     $(function(){
//         var currentScore = 0;
//         var highScore = 0;

//         $('#high-score-value').append(highScore);

//         $('#current-score-value').append(currentScore);

//         $('#ref').click(function(){
//             console.log("refresh click");
//             currentScore = 0;
//             $('#current-score-value').html(currentScore);
//             $('#ref').animate({
//                 transform: "rotate(-360deg)"
//             }, 500);
//         });

//         $('#score-button').click(function(){
//             console.log(highScore);
//             console.log(currentScore);
//             currentScore++;

//             $('#current-score-value').html(currentScore);
//             if (currentScore > highScore) {
//                 $('#high-score-value').html(currentScore);
//                  highScore++;//MUST UPDATE HIGHSCORE VARIABLE HERE :)
//             } else {
//                 $('#high-score-value').html(highScore);
//             }
//         });

//         $('.overlay').animate({
//             width: "200vw",
//             height: "200vw"
//             }, 500);
//         });

// });

