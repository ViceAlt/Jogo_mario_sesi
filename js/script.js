const mario = document.querySelector(".mario");
const pipe =document.querySelector(".pipe");
let injump = false;
let points = 0;
let death = false;

document.addEventListener("keydown", (e) => {
    if ((e.code === "Space") | (e.code === "ArrowUp")) {
        jump();
    }
})

function jump() {
    while(death = true){
        if (!mario.classList.contains("jump")){
        mario.classList.add("jump");
        injump = true;
        if(injump = true){
        }

        setTimeout(() => {
            mario.classList.remove("jump");
            injump = false;
        }, 450);
    }
    break
    }

}

setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace("px", " ");

    console.log(marioPosition);

    if(pipePosition <= 60 && pipePosition > 0 && marioPosition < 80)
    {
        death = true
        pipe.style.animation = "stop";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "stop";
        mario.style.bottom = `${marioPosition}px`;
    }
}, 10);

    points++
    console.log(points)
    console.log(death)


