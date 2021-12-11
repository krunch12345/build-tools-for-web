const submitDateCalc = document.getElementById('submitDateCalc')
const submitTimer = document.getElementById('submitTimer')
const dateCalcEl = document.getElementById('dateCalc')
const timerEl = document.getElementById('timer')

export const dateCalcVisible = () => {
    dateCalcEl.classList.toggle('hidden')
    dateCalcEl.classList.toggle('content')
    timerEl.classList.add('hidden')
    timerEl.classList.remove('content')
}

export const timerVisible = () => {
    timerEl.classList.toggle('hidden')
    timerEl.classList.toggle('content')
    dateCalcEl.classList.add('hidden')
    dateCalcEl.classList.remove('content')
}

submitDateCalc.addEventListener('click', dateCalcVisible)
submitTimer.addEventListener('click', timerVisible)
