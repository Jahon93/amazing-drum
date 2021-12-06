var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
        var buttonInnerHTML = this.innerHTML;
            
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {
    switch (key) {
        case "q":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play(); 
            break;

        case "w":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play(); 
            break;

        case "e":
                var tom2 = new Audio('./sounds/tom-3.mp3');
                tom2.play(); 
            break;

        case "r":
                var tom2 = new Audio('./sounds/tom-4.mp3');
                tom2.play(); 
            break;

        case "t":
                var tom2 = new Audio('./sounds/snare.mp3');
                tom2.play(); 
            break;

        case "y":
                var tom2 = new Audio('./sounds/crash.mp3');
                tom2.play(); 
            break;

        case "u":
                var tom2 = new Audio('./sounds/kick-bass.mp3');
                tom2.play(); 
            break;



            default: console.log(buttonInnerHTML);

    }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}