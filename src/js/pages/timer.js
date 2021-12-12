import { printError } from '../utils/print.js'
import { Howl } from 'howler'

const input = document.getElementById('time')
const blockTime = document.querySelector('.timer')

let interval

export const sound = new Howl({
    src: ['../../audio/alarm-clock.mp3'],
});

document.getElementById('start').addEventListener('click', () => {
    if (input.value < 0 || !(input.value > 0)) {
        printError('Ошибка, введите положительное целое число!', blockTime)

        return
    }

    blockTime.innerHTML = input.value

    clearInterval(interval);
    interval = setInterval(subtractTime, 1000)
})

document.getElementById('stop').addEventListener('click', () => {
    input.value = 0
    input.value = blockTime.innerHTML
    clearInterval(interval)
})

const subtractTime = () => {
    if (blockTime.innerHTML > 0) {
        blockTime.innerHTML--
    } else {
        clearInterval(interval)
        sound.play()
        input.value = 0
    }
}