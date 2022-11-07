
export default function Sounds({
    audioChuva,
    audioCafeteria,
    audioLareira,
    audioFloresta
}) {

    function soundFloresta() {
        audioChuva.pause()
        audioCafeteria.pause()
        audioLareira.pause()
        audioFloresta.loop = true

        if (audioFloresta.paused) {
            audioFloresta.play();

        } else {
            audioFloresta.pause();
        }
    }
    function soundChuva() {
        audioFloresta.pause()
        audioCafeteria.pause()
        audioLareira.pause()
        audioChuva.loop = true

        if (audioChuva.paused) {
            audioChuva.play();

        } else {
            audioChuva.pause();
        }
    }
    function soundCafeteria() {
        audioFloresta.pause()
        audioChuva.pause()
        audioLareira.pause()
        audioCafeteria.loop = true

        if (audioCafeteria.paused) {
            audioCafeteria.play();

        } else {
            audioCafeteria.pause();

        }
    }
    function soundLareira() {
        audioFloresta.pause()
        audioChuva.pause()
        audioCafeteria.pause()
        audioLareira.loop = true

        if (audioLareira.paused) {
            audioLareira.play();

        } else {
            audioLareira.pause();

        }
    }
    return {
        soundFloresta, 
        soundChuva,
        soundCafeteria,
        soundLareira
    }
}