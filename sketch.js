const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;
var word2;
var word21;
//

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;


    pig1 = new Pig(810, 350);
    bird = new Bird(100,100);


}

function draw(){
    // 

    Engine.update(engine);
    var input = document.getElementById("Pigsize").value;
    var choice = document.getElementById("choice").value;

    i = 1
   

      // if(choice == "pig"){
      //   pig1 = new Pig(810, 350,input,input);
      // }
      // else if(choice == "bird"){
      //   bird = new Bird(100,100,input,input);
      // }
  



   // drawSprites();
}

function touchMoved() {
    
  var choice = document.getElementById("choice").value;
  var input = document.getElementById("Pigsize").value;
  var line_color = document.getElementById("favcolor").value; 

  // function show() {
  //   let tab = ` <option value="line">Line</option>
  //   <option value="pig">Pig</option>
  //   <option value="bird">Bird</option>`;
    
    
  //   document.getElementsById("eraser").innerHTML = tab;
  // }

  // show()
    if (choice == "line"){
      strokeWeight(input);
      stroke(line_color);
      line(mouseX, mouseY, pmouseX, pmouseY);
      return false;
        }
    else if(choice == "bird"){

        bird.display(input);
    
        return false;
      }
    else if(choice == "pig"){
        pig1.display(input);
        return false;

      }
    else if(choice =="eraser"){
      if(input<3){
        input = 5
      }
      strokeWeight(input);
      stroke("white")
      line(mouseX, mouseY, pmouseX, pmouseY);
      
      return false;
    }
    else{
      var ctx = canvas.getContext("2d");
      
      ctx.beginPath();
      ctx.arc(mouseX,mouseY,input,0,2*Math.PI)
      ctx.stroke();
      ctx.endpath(mouseX,mouseY);
    }




    // /// ERASER code beigns
    //   if(eraser_size >= 5){
    //     strokeWeight(input);
    //     stroke(0);
    //     strokeStyle = "white"
    //     line(mouseX, mouseY, pmouseX, pmouseY);
  }

  function myFunction(somet) {
    if(somet == "bird"){
      document.getElementById("choice").value = "bird";
      console.log(somet );
    }else if(somet == "pig"){
      document.getElementById("choice").value = "pig";
    }else if(somet == "line"){
      document.getElementById("choice").value = "line";
    }else if(somet == "eraser"){
      document.getElementById("choice").value = "eraser";
    }


  }


  
  