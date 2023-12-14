let character = document.getElementById("character");
let character2 = document.getElementById("character2");
const cactus = document.getElementById("cactus");
const cactus2 = document.getElementById("cactus2");
function dino(){
    character.setAttribute('style', 'background-image: url(img/dino.png)');
    character2.setAttribute('style', 'background-image: url(img/dino.png)');
    document.addEventListener("keydown", function(event){
        game();
    })
}
function king(){
    character.setAttribute('style', 'background-image: url(img/king.png)');
    character2.setAttribute('style', 'background-image: url(img/king.png)');
    document.addEventListener("keydown", function(event){
        game();
    })
}
function cat(){
    character.setAttribute('style', 'background-image: url(img/cat.png)');
    character2.setAttribute('style', 'background-image: url(img/cat.png)');
    document.addEventListener("keydown", function(event){
        game();
    })
}
function ghost(){
    character.setAttribute('style', 'background-image: url(img/ghost.png)');
    character2.setAttribute('style', 'background-image: url(img/ghost.png)');
    document.addEventListener("keydown", function(event){
        game();
    })
}
function rabbit(){
    character.setAttribute('style', 'background-image: url(img/rabbit.png)');
    character2.setAttribute('style', 'background-image: url(img/rabbit.png)');
    document.addEventListener("keydown", function(event){
        game();
    })
}
function sheep(){
    character.setAttribute('style', 'background-image: url(img/sheep.png)');
    character2.setAttribute('style', 'background-image: url(img/sheep.png)');
    document.addEventListener("keydown", function(event){
        game();
    })
}
function hedgehog(){
    character.setAttribute('style', 'background-image: url(img/hedgehog.png)');
    character2.setAttribute('style', 'background-image: url(img/hedgehog.png)');
    document.addEventListener("keydown", function(event){
        game();
    })
}
function hamster(){
    character.setAttribute('style', 'background-image: url(img/hamster.png)');
    character2.setAttribute('style', 'background-image: url(img/hamster.png)');
    document.addEventListener("keydown", function(event){
        game();
    })
}
function game(){
    let isAlive = setInterval(function(){
        let characterNow = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let character2Now = parseInt(window.getComputedStyle(character2).getPropertyValue("top"));
        let cactusNow = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        let cactus2Now = parseInt(window.getComputedStyle(cactus2).getPropertyValue("left"));
        if(cactusNow<40 && cactusNow > 0 && characterNow >= 140 || character2Now >= 140 && cactus2Now > 0 && cactus2Now<40){
            alert("You've lost!");
        }
    },10)
}

document.addEventListener("keydown", function(event){
    jump();
})

function jump(){
    if(character.classList != "jump" && character2.classList != "jump"){
        character.classList.add("jump");
        character2.classList.add("jump");
    }   
    setTimeout(function(){
        character.classList.remove("jump");
        character2.classList.remove("jump");
    },300)
}
