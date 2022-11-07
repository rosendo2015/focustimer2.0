export default function Controls({
    buttonStop,
    buttonPause,
    buttonPlay,
    buttonFloresta,
    buttonNuvem,
    buttonCafe,
    buttonFogo,
    audioChuva,
    audioCafeteria,
    audioLareira,
    audioFloresta

}){

    function resetControls() {
        buttonStop.classList.add('active')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('active')
        buttonPlay.classList.remove('hide')
        buttonFloresta.classList.remove('active')
        buttonNuvem.classList.remove('active')
        buttonCafe.classList.remove('active')
        buttonFogo.classList.remove('active')
        audioChuva.pause()
        audioCafeteria.pause()
        audioLareira.pause()
        audioFloresta.pause()        
        return
    }

return {
    resetControls
}

}