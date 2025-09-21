const mario = document.querySelector(".mario");
const pipe =document.querySelector(".pipe");
let injump = false;

document.addEventListener("keydown", (e) => {
    if ((e.code === "Space") | (e.code === "ArrowUp")) {
        jump();
    }
})

function jump() {
    if (!mario.classList.contains("jump")){
        mario.classList.add("jump");
        injump = true;

        setTimeout(() => {
            mario.classList.remove("jump");
            injump = false;
        }, 450);
    }
}

setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace("px", " ");

    console.log(marioPosition);

    if(pipePosition <= 60 && pipePosition > 0 && marioPosition < 80)
    {
        pipe.style.animation = 'none';
        // pipe.offsetLeft.style = '${pipePosition}px';

        mario.style.animation = "none";
        mario.style.bottom = '${marioPosition}px';
    }

}, 10);
