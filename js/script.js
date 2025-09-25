const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const coin = document.querySelector('.coin');
let points = 0;
{
    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    };
    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const coinPosition = +window.getComputedStyle(coin).left.replace('px', '');
            coin.style.opacity= '100'

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            coin.style.animation = 'none';
            coin.style.left = `${coinPosition}px`

            mario.src = '../imagens/game-over.png';
            mario.style.width = '65px';
            mario.style.marginLeft = '50px';
            clearInterval(loop);
        }

        if(coinPosition <= 120 && marioPosition >= 120 && marioPosition < 180)
        {
            coin.style.opacity= '0'
        }
    }, 10);
    document.addEventListener('keydown', jump)
}