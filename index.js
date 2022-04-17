//Detecting Button Press

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//Detecting keyBoard Press
document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            a = "tom-1";
            break;
        case "l":
            a = "kick-bass";
            break;
        case "a":
            a = "tom-2";
            break;
        case "s":
            a = "tom-3";
            break;
        case "d":
            a = "tom-4";
            break;
        case "j":
            a = "snare";
            break;
        case "k":
            a = "crash";
            break;
        default:
            console.log(buttonInnerHtml);
    }
    var auto = new Audio("sounds/"+a+".mp3");
    auto.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}