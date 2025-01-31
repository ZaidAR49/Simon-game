// Done by Zaid Radaideh
$(document).ready(function () {
    start();
});
function core(){
    $(".btn").click(function () { 
        var id=$(this).attr("id");
             userSequance.push(id);
             if (userSequance[count] === rightSequance[count]) {
                 rightClick(this);
                 playSound(id);
                 count++;        
                 if (userSequance.length === rightSequance.length) { 
                     setTimeout(run, 500);
                     userSequance = []; 
                     count = 0;
                 }
             } else {
                 wrongClick(this);
                 restart();
             }             
         });
}
function restart() {
    userSequance.length = 0;
    rightSequance.length = 0;
    count = 0;
    $("h1").html("Game Over, Press Any Key to Restart");

}
function start(){
    window.count=0;
window.rightSequance=new Array();
  window.userSequance=new Array();
    $("body").keypress(function () { 
      //userSequance.length = 0;
      if(count==0){
        core();
         run(); 
      }
      
       
    });
}
function run(){
    $("h1").html("Level "+(rightSequance.length+1));
    var box=Math.floor(Math.random()*4+1);
    switch(box){
        case 1: 
        var color= "green";
        $("#"+color).fadeOut().fadeIn();
        playSound(color);
        rightSequance.push(color);
        break;
        case 2:
        var color= "red";    
        $("#"+color).fadeOut().fadeIn(); 
        playSound(color);
        rightSequance.push(color);
        break;
        case 3: 
        var color= "blue";
        $("#"+color).fadeOut().fadeIn(); 
        playSound(color);
        rightSequance.push(color);
        break;
        
        case 4: 
        var color= "yellow";
        $("#"+color).fadeOut().fadeIn();
      playSound(color);
        rightSequance.push(color);
        break;
    }
}
function wrongClick(bt){
    audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $(bt).addClass("game-over");
    $("body").addClass("red");

    setTimeout(function () {
     $(bt).removeClass("game-over");
     $("body").removeClass("red");
    },100)
}
function rightClick( bt) {
    $(bt).addClass("pressed");

    setTimeout(function () {
     $(bt).removeClass("pressed");
    },100)
}
function arrayCompare(a,b){

    if(a.length==b.length){
        for(var i=0;i<a.length;i++){
            if(a[i]!=b[i]){
                return false;
            }
        }
        return true;
    }
    return false;

}
function playSound(id){
    switch(id){
        case "green":
        var audio=new Audio("sounds/green.mp3");
        audio.play();
        break;
        case "red":  
        var audio=new Audio("sounds/red.mp3");
        audio.play();
        break;
        case "blue": 
        var audio=new Audio("sounds/blue.mp3");
        audio.play();
        break;
        case "yellow": 
        var audio=new Audio("sounds/yellow.mp3");
        audio.play();
        break;
    }
}