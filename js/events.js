import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlusFive,
    buttonMinusFive,
    buttonFloresta,
    buttonNuvem,
    buttonCafe,
    buttonFogo,
    audioFloresta,
    audioChuva,
    audioCafeteria,
    audioLareira,
    kitchenTimer,
    displayMinutes,
    displaySeconds
} from "./elements.js"

export function Events({
    controls, timer, sounds
}){
    buttonPlay.addEventListener('click', function () {
        buttonPlay.classList.add('active')
        buttonStop.classList.remove('active')
        buttonPlusFive.classList.remove('active')
        buttonMinusFive.classList.remove('active')
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        timer.downTime()
    })
    buttonPause.addEventListener('click', function () {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        timer.houd()
    })
    buttonStop.addEventListener('click', function () {
        timer.updateTimerDisplay(0, 0)
        controls.resetControls()
        timer.houd()
        timer.resetTimer()
    
    })
    buttonPlusFive.addEventListener('click', function () {
        timer.plusTime()
        buttonPlusFive.classList.add('active')
        buttonMinusFive.classList.remove('active')
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    })
    buttonMinusFive.addEventListener('click', function () {
        timer.minusTime()
        buttonPlusFive.classList.remove('active')
        buttonMinusFive.classList.add('active')
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    })
    buttonFloresta.addEventListener('click', function () {
        buttonFloresta.classList.toggle('active')
        buttonNuvem.classList.remove('active')
        buttonCafe.classList.remove('active')
        buttonFogo.classList.remove('active')
        sounds.soundFloresta()
    
    })
    buttonNuvem.addEventListener('click', function playPause() {
        buttonFloresta.classList.remove('active')
        buttonNuvem.classList.toggle('active')
        buttonCafe.classList.remove('active')
        buttonFogo.classList.remove('active')
        sounds.soundChuva()
    
    })
    buttonCafe.addEventListener('click', function () {
        buttonFloresta.classList.remove('active')
        buttonNuvem.classList.remove('active')
        buttonCafe.classList.toggle('active')
        buttonFogo.classList.remove('active')
        sounds.soundCafeteria()
    })
    buttonFogo.addEventListener('click', function () {
        buttonFloresta.classList.remove('active')
        buttonNuvem.classList.remove('active')
        buttonCafe.classList.remove('active')
        buttonFogo.classList.toggle('active')
        sounds.soundLareira()
    })
}